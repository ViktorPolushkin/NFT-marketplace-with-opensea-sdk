import React, { useState } from 'react'
import { PageHeader, Button, Drawer, Input, Upload, message } from 'antd'
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
  collections,
  onViewCollection,
  onClickLike,
  onClickCard,
  onCreateCollection,
}) => {
  const [imageUrl, setImageUrl] = useState('')
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
        setImageUrl(imageUrl)
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
                  action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                  onPreview={onPreview}
                >
                  {imageUrl ? (
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
              <Input placeholder='Example: Treasures of the sea' />
            </div>
            <div className='collections-creator-info-bio'>
              <TextArea
                placeholder='Provide description for your collection.'
                rows={4}
              />
            </div>
          </div>
          <div className='collections-creator-buttons'>
            <Button type='primary' onClick={() => onCreateCollection()}>
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
