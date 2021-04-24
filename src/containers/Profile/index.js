import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { profileStateSelector } from 'redux/selectors'
import { getProfileAction, updateProfileAction } from 'redux/Reducers/Profile'
import { IS_PENDING } from 'constants/Constants'

import { storage } from 'configuration/Firebase'

import ProfileComponent from 'components/Profile'

const Profile = ({ profile, getProfileAction, updateProfileAction }) => {
  const { status, payload, error } = profile
  const [hasError, setHasError] = useState('')
  const [isUploading, setUploading] = useState(false)
  const [bannerUrl, setBannerUrl] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [bio, setBio] = useState('')
  const [website, setWebsite] = useState('')
  const [discord, setDiscord] = useState('')

  useEffect(() => {
    setHasError('')
    getProfileAction({})
  }, [getProfileAction])

  useEffect(() => {
    if (payload) {
      setBannerUrl(payload.bannerUrl)
      setAvatarUrl(payload.avatarUrl)
      setNickname(payload.nickname)
      setEmail(payload.email)
      setBio(payload.bio)
      setWebsite(payload.website)
      setDiscord(payload.discord)
    }
  }, [payload])

  const isPending = status => {
    return status.indexOf(IS_PENDING) > -1
  }

  const isError = () => {
    return error
  }

  const customRequest = async (data, isBanner = false) => {
    const { onError, onSuccess, file } = data
    const metadata = {
      contentType: 'image/jpeg',
    }
    const storageRef = await storage.ref('image')
    const imageName = file.uid //a unique name for the image
    const imgFile = storageRef.child(imageName)
    try {
      console.log('start_upload')
      const image = await imgFile.put(file, metadata)

      if (isBanner) {
        setBannerUrl(await imgFile.getDownloadURL())
      } else {
        setAvatarUrl(await imgFile.getDownloadURL())
      }
      onSuccess(null, image)
    } catch (e) {
      console.log(e)
      onError(e)
    }
  }

  const onClickHandler = () => {
    setUploading(true)

    updateProfileAction({
      body: {
        bannerUrl,
        avatarUrl,
        nickname,
        email,
        bio,
        website,
        discord,
      },
      onSuccess: () => {
        setUploading(false)
      },
      onFailure: () => {
        setUploading(false)
      },
    })
  }

  const onChangeHandler = event => {
    event.preventDefault()

    const target = event.target.name

    switch (target) {
      case 'nickname':
        setNickname(event.target.value)
        break
      case 'email':
        setEmail(event.target.value)
        break
      case 'bio':
        setBio(event.target.value)
        break
      case 'website':
        setWebsite(event.target.value)
        break
      case 'discord':
        setDiscord(event.target.value)
        break
      default:
        break
    }
  }

  return (
    <ProfileComponent
      isUploading={isUploading || isPending(status)}
      bannerUrl={bannerUrl}
      avatarUrl={avatarUrl}
      nickname={nickname}
      email={email}
      bio={bio}
      website={website}
      discord={discord}
      onClickHandler={onClickHandler}
      onChangeHandler={onChangeHandler}
      customRequest={customRequest}
      onError={isError}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  profile: profileStateSelector,
})

const mapDispatchToProps = {
  getProfileAction,
  updateProfileAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
