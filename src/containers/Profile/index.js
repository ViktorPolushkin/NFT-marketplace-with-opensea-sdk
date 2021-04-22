import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { profileStateSelector } from 'redux/selectors'
import { getProfileAction, updateProfileAction } from 'redux/Reducers/Profile'
import { IS_PENDING } from 'constants/Constants'

import ProfileComponent from 'components/Profile'

import { storage } from 'configuration/Firebase'

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

  const handleFirebaseUpload = (imageFile, isBanner = false) => {
    if (!imageFile) {
      setHasError('File is not an image!, please check strictly')
      return
    }

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
        return
      },
      () => {
        storage
          .ref('images')
          .child(imageFile.uid)
          .getDownloadURL()
          .then(firebaseUrl => {
            if (isBanner) {
              setBannerUrl(firebaseUrl)
            } else {
              setAvatarUrl(firebaseUrl)
            }
          })
          .catch(error => {
            console.error(error)
            setHasError(error.message)
            return
          })
      }
    )
  }

  const onClickHandler = async (banner, avatar) => {
    setUploading(true)
    console.log('Banner:', banner, 'Avatar:', avatar)
    await handleFirebaseUpload(banner, true)
    await handleFirebaseUpload(avatar)

    if (hasError) {
      return
    }

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
    })

    setUploading(false)
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
