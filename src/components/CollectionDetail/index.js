import React, { useState } from 'react'
import { PageHeader, Button, Drawer, Input, Upload, Modal, message } from 'antd'
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  LoadingOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { generateTokenCards } from 'helpers'

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
  const isLt5M = file.size / 1024 / 1024 < 5
  if (!isLt5M) {
    message.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt5M
}

const CollectionDetail = ({
  bannerUrl,
  name,
  description,
  tokens,
  rate,
  onChangeHandler,
  onCreateHandler,
  onDeleteHandler,
  imageUrl,
  customRequest,
}) => {
  const [isUploading, setIsUploading] = useState(false)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)

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

  const setConfirmModalVisible = visible => {
    setModalVisible(visible)
  }

  return (
    <div className='collection-detail'>
      <div className='collection-detail-banner'>
        <img
          className='collection-detail-banner-background'
          src={bannerUrl}
          alt='collection_banner_img'
        />
        <div className='collection-detail-banner-name'>
          {name}
          <div className='collection-detail-banner-description'>
            {description}
          </div>
        </div>
      </div>
      <div className='collection-detail-header'>
        <PageHeader
          className='collection-detail-header-title'
          title={'Items'}
          extra={[
            <Search key={'itemSearch'} style={{ width: 'auto' }} />,
            <Button
              key={'itemAdd'}
              type='primary'
              icon={<PlusCircleOutlined />}
              onClick={showDrawer}
            >
              Add Item
            </Button>,
            <Button
              key={'itemDelete'}
              type='danger'
              icon={<MinusCircleOutlined />}
              onClick={() => setConfirmModalVisible(true)}
            >
              Delete Collection
            </Button>,
          ]}
        />
      </div>
      <div className='collection-detail-comments'>
        You can create your own items in here with no gas
      </div>
      <div className='item-assets'>
        <div className='item-assets-wrap'>
          {
            generateTokenCards()
            // tokens,
            // rate,
            // onViewCollection,
            // onClickCard,
            // onClickEdit
          }
        </div>
      </div>
      <Modal
        title='Are you sure to delete this Collection?'
        centered
        visible={isModalVisible}
        onOk={() => {
          onDeleteHandler(name)
          setConfirmModalVisible(false)
        }}
        onCancel={() => setConfirmModalVisible(false)}
        okButtonProps={{ type: 'danger' }}
      >
        <p className='collection-detail-deletion-confirm'>
          To confirm deletion, please input
          <span>{name}</span>
          in below input field
        </p>
        <Input name='confirm' onChange={e => onChangeHandler(e)} />
      </Modal>
      <Drawer
        title='Create a new Item'
        width={'100%'}
        placement={'right'}
        closable={true}
        onClose={onClose}
        visible={drawerVisible}
        key={'right'}
      >
        <div className='item-creator'>
          <div className='item-creator-info'>
            <div className='item-creator-info-file-reader'>
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
                  <img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>
            <div className='item-creator-info-name'>
              <Input
                name={'name'}
                placeholder='Name of new item'
                onChange={e => onChangeHandler(e)}
              />
            </div>
            <div className='item-creator-info-bio'>
              <TextArea
                name={'description'}
                placeholder='Provide description for your item.'
                rows={4}
                onChange={e => onChangeHandler(e)}
              />
            </div>
            <div className='item-creator-info-fee'>
              {'Our site collects 4% of transaction fee'}
            </div>
          </div>
          <div className='item-creator-buttons'>
            <Button
              // loading={isLoading}
              type='primary'
              onClick={onCreateHandler}
            >
              Create Item
            </Button>
            <Button onClick={() => onClose()}>Cancel</Button>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default CollectionDetail
