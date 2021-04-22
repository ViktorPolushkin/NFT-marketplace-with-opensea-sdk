import React, { useState } from 'react'
import { PageHeader, Input, Button, Upload, message } from 'antd'
import ImgCrop from 'antd-img-crop'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import './style.less'

const { TextArea } = Input

const Profile = ({
  bannerUrl,
  avatar,
  name,
  email,
  userName,
  bio,
  website,
  discord,
}) => {
  const [bannerImage, setBannerImage] = useState('')
  const [avatarImage, setAvatarImage] = useState('')
  const [isBannerUploading, setBannerUploading] = useState(false)
  const [isAvatarUploading, setAvatarUploading] = useState(false)

  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
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
          setBannerImage(image)
          setBannerUploading(false)
        } else {
          setAvatarImage(image)
          setAvatarUploading(false)
        }
      })
    }
  }

  const onPreview = async file => {
    let src = file.url
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
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
      <PageHeader className='profile-edit-header' title={'Edit your profile'} />
      <div className='profile-edit'>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Email :</div>
          <Input
            addonAfter={'.com'}
            placeholder={'Please fill your email in here'}
          />
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Nickname :</div>
          <Input
            addonBefore={'@'}
            placeholder={'Please fill your email in here'}
          />
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Banner Image :</div>
          <ImgCrop rotate>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              beforeUpload={beforeUpload}
              onChange={info => handleChange(info, true)}
              onPreview={onPreview}
            >
              {bannerImage ? (
                <img src={bannerImage} alt='avatar' style={{ width: '100%' }} />
              ) : (
                uploadBannerButton
              )}
            </Upload>
          </ImgCrop>
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Avatar Image :</div>
          <ImgCrop rotate>
            <Upload
              name='avatar'
              listType='picture-card'
              className='avatar-uploader'
              showUploadList={false}
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              beforeUpload={beforeUpload}
              onChange={handleChange}
              onPreview={onPreview}
            >
              {avatarImage ? (
                <img src={avatarImage} alt='avatar' style={{ width: '100%' }} />
              ) : (
                uploadAvatarButton
              )}
            </Upload>
          </ImgCrop>
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Bio :</div>
          <TextArea
            rows={4}
            placeholder={'Please note about you shortly. (Max 300 characters)'}
            maxLength={300}
          />
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Website :</div>
          <Input
            addonBefore={'www.'}
            addonAfter={'.com'}
            placeholder={'example'}
          />
        </div>
        <div className='profile-edit-field'>
          <div className='profile-edit-title'>Discord :</div>
          <Input placeholder={'Please include #Code'} />
        </div>
        <div className='profile-edit-save'>
          <Button type='primary'>Save Changes</Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
