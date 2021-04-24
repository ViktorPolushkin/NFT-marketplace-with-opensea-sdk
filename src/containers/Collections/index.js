import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { collectionStateSelector, profileStateSelector } from 'redux/selectors'
import {
  getCollectionsAction,
  createCollectionAction,
} from 'redux/Reducers/Collection'
import { useHistory } from 'react-router-dom'
import { IS_PENDING } from 'constants/Constants'

import { storage } from 'configuration/Firebase'

import CollectionsComponent from 'components/Collections'

const Collections = ({
  collection,
  profile,
  getCollectionsAction,
  createCollectionAction,
  ...otherProps
}) => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [fee, setFee] = useState('')
  const [hasError, setHasError] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setHasError('')
    getCollectionsAction({})
  }, [getCollectionsAction])

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
      onSuccess(null, image)
    } catch (e) {
      console.log(e)
      onError(e)
    }
  }

  const onClickLike = () => {}

  const onViewCollection = () => {}

  const onClickCard = (owner, collectionId) => {
    console.log(owner, collectionId)
    history.push(`${owner}/${collectionId}`)
  }

  const onChangeHandler = event => {
    event.preventDefault()

    const target = event.target.name

    switch (target) {
      case 'name':
        setName(event.target.value)
        break
      case 'bio':
        setBio(event.target.value)
        break
      default:
        break
    }
  }

  const onFeeChangeHandler = value => {
    setFee(value)
  }

  const onCreateCollection = imageFile => {
    createCollectionAction({
      body: {
        collectionId: imageFile.uid,
        assetUrl: imageUrl,
        name,
        bio,
        fee,
        creator: profile.payload.walletId,
        owner: profile.payload.walletId,
      },
      onSuccess: getCollectionsAction({}),
    })
  }

  return (
    <CollectionsComponent
      imageUrl={imageUrl}
      collections={
        collection.payload && collection.payload.length
          ? collection.payload
          : []
      }
      onClickLike={onClickLike}
      onViewCollection={onViewCollection}
      onClickCard={onClickCard}
      onCreateCollection={onCreateCollection}
      onChangeHandler={onChangeHandler}
      onFeeChangeHandler={onFeeChangeHandler}
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
  createCollectionAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections)
