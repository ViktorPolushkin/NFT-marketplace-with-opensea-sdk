import React, { useState } from 'react'
import { PageHeader, Input, Upload, Button, message } from 'antd'
import ImgCrop from 'antd-img-crop'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import './style.less'

const { TextArea } = Input

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

const CollectionEdit = ({
  name,
  url,
  description,
  onChange,
  onUpdate,
  customRequest,
}) => {
  const [isUploading, setIsUploading] = useState(false)

  const uploadButton = (
    <div>
      {isUploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload Photo</div>
    </div>
  )

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setIsUploading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, () => {
        setIsUploading(false)
      })
    }
  }

  return (
    <div className='collection-edit'>
      <PageHeader
        className='collection-edit-header'
        title={'Edit your collection'}
      />
      <div className='collection-edit-field'>
        <div className='collection-edit-field-title'>Image URL:</div>
        <ImgCrop rotate>
          <Upload
            name='avatar'
            listType='picture-card'
            className='avatar-uploader'
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            customRequest={customRequest}
          >
            {!isUploading && url ? (
              <img src={url} alt='avatar' style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </ImgCrop>
      </div>
      <div className='collection-edit-field'>
        <div className='collection-edit-field-title'>Name:</div>
        <Input name={'name'} value={name} onChange={e => onChange(e)} />
      </div>
      <div className='collection-edit-field'>
        <div className='collection-edit-field-title'>Description:</div>
        <TextArea
          name={'description'}
          value={description}
          rows={4}
          onChange={e => onChange(e)}
        />
      </div>
      <div className='collection-edit-save'>
        <Button type='primary' onClick={onUpdate}>
          Save Changes
        </Button>
      </div>
    </div>
  )
}

export default CollectionEdit
