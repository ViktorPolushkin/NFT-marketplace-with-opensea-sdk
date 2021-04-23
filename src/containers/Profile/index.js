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

  const handleFirebaseUpload = (imageFile, isBanner = false) => {
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
            if (isBanner) {
              setBannerUrl(firebaseUrl)
              console.log('banner', firebaseUrl)
              resolve([firebaseUrl, isBanner])
            } else {
              setAvatarUrl(firebaseUrl)
              console.log('avatar', firebaseUrl)
              resolve([firebaseUrl, isBanner])
            }
          }
        }
      )
    })
  }

  const onClickHandler = (banner, avatar) => {
    setUploading(true)
    let promises = []
    promises.push(handleFirebaseUpload(banner, true))
    promises.push(handleFirebaseUpload(avatar))

    Promise.all(promises).then(datas => {
      let banner
      let avatar

      datas.forEach(data => {
        if (data[1]) {
          banner = data[0]
        } else {
          avatar = data[0]
        }
      })

      if (hasError) {
        return
      }

      updateProfileAction({
        body: {
          bannerUrl: banner,
          avatarUrl: avatar,
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
