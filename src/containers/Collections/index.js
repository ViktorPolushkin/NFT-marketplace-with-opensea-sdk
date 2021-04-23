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

  const isPending = (profile, collection) => {
    const profileStatus = profile.status
    const collectionStatus = collection.status
    return (
      profileStatus.indexOf(IS_PENDING) > -1 ||
      collectionStatus.indexOf(IS_PENDING) > -1
    )
  }

  useEffect(() => {
    setHasError('')
    getCollectionsAction({})
  }, [getCollectionsAction])

  const handleFirebaseUpload = imageFile => {
    if (!imageFile) {
      setHasError('File is not an image!, please check strictly')
      return
    }

    return new Promise((resolve, reject) => {
      const uploadTask = storage
        .ref(`/images/${imageFile.uid}`)
        .put(imageFile.originFileObj)

      uploadTask.on(
        'state_changed',
        snapshot => {
          console.log(snapshot)
        },
        error => {
          setHasError(error.message)
          reject()
        },
        async () => {
          const firebaseUrl = await storage
            .ref('images')
            .child(imageFile.uid)
            .getDownloadURL()

          if (firebaseUrl) {
            setImageUrl(firebaseUrl)
            resolve(firebaseUrl)
          }
        }
      )
    })
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
    let promise = []
    promise.push(handleFirebaseUpload(imageFile))

    Promise.all(promise).then(data => {
      createCollectionAction({
        body: {
          collectionId: imageFile.uid,
          assetUrl: data[0],
          name,
          bio,
          fee,
          creator: profile.payload.walletId,
          owner: profile.payload.walletId,
        },
        onSuccess: getCollectionsAction({}),
      })
    })
  }

  return (
    <CollectionsComponent
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
      // isLoading={() => isPending(profile, collection)}
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
