import React, { useState } from 'react'
import {
  PageHeader,
  Button,
  Drawer,
  Input,
  InputNumber,
  Upload,
  message,
} from 'antd'
import {
  PlusCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import ImgCrop from 'antd-img-crop'
import { generateCards } from 'helpers'

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

const Collections = ({
  imageUrl,
  collections,
  onViewCollection,
  onClickLike,
  onClickCard,
  onCreateCollection,
  onChangeHandler,
  onFeeChangeHandler,
  customRequest,
}) => {
  const [imageFile, setImageFile] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [drawerVisible, setDrawerVisible] = useState(false)

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setIsUploading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setImageFile(info.file)
        setIsUploading(false)
      })
    }
  }

  const uploadButton = (
    <div>
      {isUploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload Photo</div>
    </div>
  )

  const showDrawer = () => {
    setDrawerVisible(true)
  }

  const onClose = () => {
    setDrawerVisible(false)
  }

  return (
    <div className='collections'>
      <div className='collections-page-header'>
        <PageHeader
          className='collections-page-header-title'
          title={'Collections'}
          extra={[
            <Button
              key='collectionAdd'
              type='primary'
              icon={<PlusCircleOutlined />}
              onClick={showDrawer}
            >
              Add Collection
            </Button>,
          ]}
        />
      </div>
      <div className='collections-assets'>
        <div className='collections-assets-wrap'>
          {generateCards(
            collections,
            onViewCollection,
            onClickLike,
            onClickCard
          )}
        </div>
      </div>
      <Drawer
        title='Create new collection'
        width={400}
        placement={'right'}
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
        key={'right'}
      >
        <div className='collections-creator'>
          <div className='collections-creator-info'>
            <div className='collections-creator-info-file-reader'>
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
                  {!isUploading && imageUrl ? (
                    <img
                      src={imageUrl}
                      alt='avatar'
                      style={{ width: '100%' }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </ImgCrop>
            </div>
            <div className='collections-creator-info-name'>
              <Input
                name={'name'}
                placeholder='Name of new collection'
                onChange={e => onChangeHandler(e)}
              />
            </div>
            <div className='collections-creator-info-bio'>
              <TextArea
                name={'bio'}
                placeholder='Provide description for your collection.'
                rows={4}
                onChange={e => onChangeHandler(e)}
              />
            </div>
            <div className='collections-creator-info-fee'>
              <InputNumber
                style={{ width: '100%' }}
                name={'fee'}
                min={0}
                max={10}
                step={0.01}
                placeholder={`Fee can't be more than 10`}
                onChange={value => onFeeChangeHandler(value)}
              />
            </div>
          </div>
          <div className='collections-creator-buttons'>
            <Button
              // loading={isLoading}
              type='primary'
              onClick={() => onCreateCollection(imageFile)}
            >
              Create collection
            </Button>
            <Button onClick={() => onClose()}>Cancel</Button>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Collections
