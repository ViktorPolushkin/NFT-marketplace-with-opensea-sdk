import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { collectionStateSelector, profileStateSelector } from 'redux/selectors'
import {
  getCollectionsAction,
  updateCollectionsAction,
} from 'redux/Reducers/Collection'
import { useHistory } from 'react-router-dom'
import { IS_PENDING } from 'constants/Constants'

import { storage } from 'configuration/Firebase'

import CollectionComponent from 'components/Collection'

const Collection = ({
  collection,
  profile,
  getCollectionsAction,
  updateCollectionsAction,
  ...otherProps
}) => {
  const history = useHistory()

  const profileData = profile.me

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [hasError, setHasError] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setHasError('')
    if (profileData) {
      getCollectionsAction({
        params: profileData.walletId,
      })
    }
  }, [getCollectionsAction, profileData])

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

  const onClickLike = () => {}

  const onViewCollection = () => {}

  const onClickCard = name => {
    history.push(`/collection/${name /*.replaceAll(' ', '')*/}/`)
  }

  const onClickEdit = name => {
    history.push(`/collection/${name /*.replaceAll(' ', '')*/}/edit`)
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
      default:
        break
    }
  }

  const onCreateCollection = () => {
    const lastCollections = collection.items
    lastCollections.push({ name, url: imageUrl, description })
    updateCollectionsAction({
      body: {
        collections: lastCollections,
      },
      params: profileData.walletId,
    })
  }

  return (
    <CollectionComponent
      imageUrl={imageUrl}
      collections={
        collection.items && collection.items.length ? collection.items : []
      }
      onClickLike={onClickLike}
      onViewCollection={onViewCollection}
      onClickCard={onClickCard}
      onClickEdit={onClickEdit}
      onCreateCollection={onCreateCollection}
      onChangeHandler={onChangeHandler}
      customRequest={customRequest}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  collection: collectionStateSelector,
  profile: profileStateSelector,
})

const mapDispatchToProps = {
  getCollectionsAction,
  updateCollectionsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)
