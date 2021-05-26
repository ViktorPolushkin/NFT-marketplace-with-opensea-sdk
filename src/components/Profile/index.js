import React, { useState } from 'react'
import { PageHeader, Input, Button, Upload, message } from 'antd'
import ImgCrop from 'antd-img-crop'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import './style.less'

const { TextArea } = Input

const Profile = ({
  isUploading = true,
  banner,
  avatar,
  nickname,
  email,
  description,
  website,
  discord,
  onClickHandler,
  onChangeHandler,
  customRequest,
  onError,
}) => {
  const [isBannerUploading, setBannerUploading] = useState(false)
  const [isAvatarUploading, setAvatarUploading] = useState(false)

  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const beforeUpload = file => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/gif'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const handleChange = (info, isBanner = false) => {
    console.log(info)
    if (info.file.status === 'uploading') {
      if (isBanner) {
        setBannerUploading(true)
      } else {
        setAvatarUploading(true)
      }
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, image => {
        if (isBanner) {
          setBannerUploading(false)
        } else {
          setAvatarUploading(false)
        }
      })
    }
  }

  const uploadBannerButton = (
    <div>
      {isBannerUploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload Photo</div>
    </div>
  )
  const uploadAvatarButton = (
    <div>
      {isAvatarUploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload Photo</div>
    </div>
  )

  return (
    <div className='profile'>
      <div className='profile-banner'>
        <img
          className='profile-banner-background'
          src={banner}
          alt='profile_banner_img'
        />
        <img
          className='profile-banner-avatar'
          src={avatar}
          alt='profile_banner_img'
        />
        <div className='profile-banner-nickname'>{nickname}</div>
      </div>
      <PageHeader className='profile-edit-header' title={'Edit your profile'} />
      <div className='profile-edit'>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Email :</div>
          <Input
            size={'large'}
            name={'email'}
            addonAfter={'.com'}
            placeholder={'Please fill your email in here'}
            value={email}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Nickname :</div>
          <Input
            size={'large'}
            name={'nickname'}
            addonBefore={'@'}
            placeholder={'Please fill your email in here'}
            value={nickname}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Banner Image :</div>
          <ImgCrop rotate aspect={16 / 9} grid quality={1} modalOk={'Crop'}>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={info => handleChange(info, true)}
              customRequest={data => customRequest(data, true)}
            >
              {!isBannerUploading && banner ? (
                <img src={banner} alt='avatar' style={{ width: '100%' }} />
              ) : (
                uploadBannerButton
              )}
            </Upload>
          </ImgCrop>
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Avatar Image :</div>
          <ImgCrop rotate grid quality={1} modalOk={'Crop'}>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
              customRequest={data => customRequest(data)}
            >
              {!isAvatarUploading && avatar ? (
                <img src={avatar} alt='avatar' style={{ width: '100%' }} />
              ) : (
                uploadAvatarButton
              )}
            </Upload>
          </ImgCrop>
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Description :</div>
          <TextArea
            name={'description'}
            rows={4}
            placeholder={'Please note about you shortly. (Max 300 characters)'}
            maxLength={300}
            value={description}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Website :</div>
          <Input
            size={'large'}
            name={'website'}
            addonBefore={'www.'}
            addonAfter={'.com'}
            placeholder={'example'}
            value={website}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Discord :</div>
          <Input
            size={'large'}
            name={'discord'}
            placeholder={'Please include #Code'}
            value={discord}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className='profile-edit-save'>
          <Button size={'large'} type='primary' loading={isUploading} onClick={onClickHandler} shape={'round'}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
