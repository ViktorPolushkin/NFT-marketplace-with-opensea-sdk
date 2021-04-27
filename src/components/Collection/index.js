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
import { generateCollectionCards } from 'helpers'

import './style.less'

const { TextArea, Search } = Input

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

const Collection = ({
  imageUrl,
  collections,
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
    <div className='collection'>
      <div className='collection-page-header'>
        <PageHeader
          className='collection-page-header-title'
          title={'Collection'}
          extra={[
            <Search key={'collectionSearch'} style={{ width: 'auto' }} />,
            <Button
              key={'collectionAdd'}
              type='primary'
              icon={<PlusCircleOutlined />}
              onClick={showDrawer}
            >
              Add Collection
            </Button>,
          ]}
        />
      </div>
      <div className='collection-page-comments'>
        You can create your own collection in here with no gas
      </div>
      <div className='collection-assets'>
        <div className='collection-assets-wrap'>
          {generateCollectionCards(collections, onClickCard)}
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
        <div className='collection-creator'>
          <div className='collection-creator-info'>
            <div className='collection-creator-info-file-reader'>
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
            <div className='collection-creator-info-name'>
              <Input
                name={'name'}
                placeholder='Name of new collection'
                onChange={e => onChangeHandler(e)}
              />
            </div>
            <div className='collection-creator-info-bio'>
              <TextArea
                name={'bio'}
                placeholder='Provide description for your collection.'
                rows={4}
                onChange={e => onChangeHandler(e)}
              />
            </div>
            <div className='collection-creator-info-fee'>
              <InputNumber
                style={{ width: '100%' }}
                name={'fee'}
                min={0}
                max={10}
                step={0.01}
                placeholder={`Our site collects 4% of transaction fee`}
                disabled
                onChange={value => onFeeChangeHandler(4)}
              />
            </div>
          </div>
          <div className='collection-creator-buttons'>
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

export default Collection
