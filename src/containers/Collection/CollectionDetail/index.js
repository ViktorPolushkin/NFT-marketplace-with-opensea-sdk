import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { collectionStateSelector, profileStateSelector } from 'redux/selectors'
import { getCollectionsAction } from 'redux/Reducers/Collection'
import { useHistory } from 'react-router-dom'
import { IS_PENDING } from 'constants/Constants'

import { storage } from 'configuration/Firebase'

import CollectionDetailComponent from 'components/CollectionDetail'

const CollectionDetail = ({
  match,
  collection,
  profile,
  getCollectionsAction,
}) => {
  const profileData = profile.me
  const [currentCollection, setCurrentCollection] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

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
      default:
        break
    }
  }

  const onCreateHandler = () => {}

  return (
    <CollectionDetailComponent
      bannerUrl={currentCollection.url}
      name={currentCollection.name}
      description={currentCollection.description}
      tokens={[]}
      onChangeHandler={onChangeHandler}
      onCreateHandler={onCreateHandler}
      imageUrl={imageUrl}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetail)
