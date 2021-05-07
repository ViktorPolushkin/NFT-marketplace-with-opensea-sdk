import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { collectionStateSelector, profileStateSelector, tokenStateSelector } from 'redux/selectors'
import {
  getCollectionsAction,
  updateCollectionsAction,
} from 'redux/Reducers/Collection'
import {
  createTokenAction,
  getTokensActionByCollectionId
} from 'redux/Reducers/Token'
import { useHistory } from 'react-router-dom'

import { APP_FEE, IS_PENDING } from 'constants/Constants'
import PATHS from 'constants/Path'

import { storage } from 'configuration/Firebase'

import CollectionDetailComponent from 'components/CollectionDetail'

const CollectionDetail = ({
  match,
  collection,
  profile,
  token,
  getCollectionsAction,
  updateCollectionsAction,
  createTokenAction,
  getTokensActionByCollectionId
}) => {
  const history = useHistory()

  const profileData = profile.me
  const [currentCollection, setCurrentCollection] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [confirm, setConfirm] = useState('')

  useEffect(() => {
    if (profileData) {
      getCollectionsAction({
        params: profileData.walletId,
        onSuccess: ({ data }) => {
          data.map(
            (item, index) =>
              item.name === match.params.collectionId &&
              setCurrentCollection(item)
          )
        },
      })
    }
  }, [getCollectionsAction, profileData, match])

  useEffect(() => {
    if (currentCollection) {
      getTokensActionByCollectionId({
        body: {
          collectionId: currentCollection.name
        }
      })
    }
  }, [getTokensActionByCollectionId, currentCollection])

  const customRequest = async ({ onError, onSuccess, file }) => {
    const metadata = {
      contentType: 'image/jpeg',
    }
    const storageRef = await storage.ref('image')
    const imageName = file.uid //a unique name for the image
    const imgFile = storageRef.child(imageName)
    try {
      console.log('start_upload')
      const image = await imgFile.put(file, metadata)
      setImageUrl(await imgFile.getDownloadURL())
      onSuccess && onSuccess(null, image)
    } catch (e) {
      console.log(e)
      onError && onError(e)
    }
  }

  const onChangeHandler = event => {
    event.preventDefault()

    const target = event.target.name

    switch (target) {
      case 'name':
        setName(event.target.value)
        break
      case 'description':
        setDescription(event.target.value)
        break
      case 'confirm':
        setConfirm(event.target.value)
        break
      default:
        break
    }
  }

  const dummyToken = {
    id: '123098123098asdflkjasdflkj',
    address: '123098123098',
    type: 'Binance',
  }
  // ! Super important:
  // TODO: Add smart contract
  const onCreateHandler = () => {
    console.log(imageUrl, name, description);
    createTokenAction({
      body: {
        collectionId: currentCollection.name,
        id: dummyToken.id,
        address: dummyToken.address,
        type: dummyToken.type,
        detail: {
          url: imageUrl,
          name,
          description,
          creator: profileData.walletId,
        },
        createdDate: Date.now(),
        fee: APP_FEE,
      }
    })
  }

  const onDeleteHandler = name => {
    if (name === confirm) {
      const lastCollections = collection.items
      let newCollections = []
      lastCollections.forEach(lastOne => {
        if (lastOne.name !== currentCollection.name) {
          newCollections.push(lastOne)
        }
      })

      console.log(newCollections)
      updateCollectionsAction({
        body: {
          collections: newCollections,
        },
        params: profileData.walletId,
        onSuccess: () => {
          history.push('/collection')
        },
      })
    }
  }

  const onClickEdit = (collectionId, id) => {
    history.push(`${PATHS.COLLECTION}/${collectionId}/${id}/edit`)
  }

  const onClickCard = (collectionId, id) => {
    history.push(`${PATHS.COLLECTION}/${collectionId}/${id}`)
  }

  return (
    <CollectionDetailComponent
      bannerUrl={ currentCollection.url }
      name={ currentCollection.name }
      description={ currentCollection.description }
      tokens={ token.content }
      rate={ 2000 }
      onChangeHandler={ onChangeHandler }
      onCreateHandler={ onCreateHandler }
      onDeleteHandler={ onDeleteHandler }
      imageUrl={ imageUrl }
      customRequest={ customRequest }
      onClickEdit={ onClickEdit }
      onClickCard={ onClickCard }
    />
  )
}

const mapStateToProps = createStructuredSelector({
  collection: collectionStateSelector,
  profile: profileStateSelector,
  token: tokenStateSelector
})

const mapDispatchToProps = {
  getCollectionsAction,
  updateCollectionsAction,
  createTokenAction,
  getTokensActionByCollectionId
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetail)
