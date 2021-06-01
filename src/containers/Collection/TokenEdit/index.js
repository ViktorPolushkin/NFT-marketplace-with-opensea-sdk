import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { tokenStateSelector } from 'redux/selectors'
import { getTokenAction, updateTokenAction } from 'redux/Reducers/Token'

import { storage } from 'configuration/Firebase'

import TokenEditComponent from 'components/TokenEdit'

const TokenEdit = ({ match, token, getTokenAction, updateTokenAction }) => {
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')
  const [tokenDetail, setTokenDetail] = useState({})

  const { tokenId } = match.params

  useEffect(() => {
    getTokenAction({
      params: tokenId,
      onSuccess: payload => {
        setTokenDetail(payload.data.detail)
      },
    })
  }, [getTokenAction, tokenId])

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

  const onUpdateHandler = () => {
    updateTokenAction({
      body: {
        url: imageUrl,
        name,
        description,
        creator: tokenDetail.creator,
        owner: tokenDetail.owner,
        fee: 4,
      },
      params: tokenId,
    })
  }

  console.log(tokenDetail)

  return (
    <TokenEditComponent
      name={name || tokenDetail.name}
      url={imageUrl || tokenDetail.url}
      description={description || tokenDetail.description}
      onChange={onChangeHandler}
      onUpdate={onUpdateHandler}
      customRequest={customRequest}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  token: tokenStateSelector,
})

const mapDispatchToProps = {
  getTokenAction,
  updateTokenAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenEdit)
