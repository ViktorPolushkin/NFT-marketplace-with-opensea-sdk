import React, { useState } from 'react'
import { PageHeader, Input, Upload, Button, message } from 'antd'
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
  const isLt5M = file.size / 1024 / 1024 < 5
  if (!isLt5M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt5M
}

const TokenEdit = ({
  url,
  name,
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
    <div className='token-edit'>
      <PageHeader className='token-edit-header' title={'Edit your token'} />
      <div className='token-edit-field'>
        <div className='token-edit-field-title'>Image URL:</div>
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
      </div>
      <div className='token-edit-field'>
        <div className='token-edit-field-title'>Name:</div>
        <Input name={'name'} value={name} onChange={e => onChange(e)} />
      </div>
      <div className='token-edit-field'>
        <div className='token-edit-field-title'>Description:</div>
        <TextArea
          name={'description'}
          value={description}
          rows={4}
          onChange={e => onChange(e)}
        />
      </div>
      <div className='token-edit-save'>
        <Button type='primary' onClick={onUpdate} shape={'round'}>
          Save Changes
        </Button>
      </div>
    </div>
  )
}

export default TokenEdit
