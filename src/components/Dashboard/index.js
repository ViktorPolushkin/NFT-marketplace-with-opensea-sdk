import React from 'react'
import { useHistory } from 'react-router-dom'
import { PageHeader, Carousel, Button, Divider } from 'antd'
import { SearchOutlined, HighlightOutlined } from '@ant-design/icons'

import './style.less'

import PATHS from 'constants/Path'

import BGIMAGE from 'resources/background.jpg'

const Dashboard = () => {
  const history = useHistory()

  const onClickBrowse = () => {
    history.push(PATHS.BROWSE_ASSETS)
  }

  const onClickCreate = () => {
    history.push(PATHS.COLLECTIONS)
  }

  return (
    <div className='dashboard'>
      <div className='dashboard-carousel'>
        <Carousel autoplay dotPosition={'top'} effect={'fade'}>
          <div className='dashboard-carousel-image-wrap'>
            <div className='dashboard-carousel-image-info'>
              <span>
                This is large NFT marketplace. You can find everything in here!
              </span>
              <Button
                icon={<SearchOutlined />}
                type={'primary'}
                onClick={onClickBrowse}
              >
                Browse Collections
              </Button>
            </div>
            <img
              className='dashboard-carousel-image'
              src={BGIMAGE}
              alt={'Carousel img'}
            />
          </div>
          <div className='dashboard-carousel-image-wrap'>
            <div className='dashboard-carousel-image-info'>
              <span>Do you want to create your own? Let's do this!</span>
              <Button
                icon={<HighlightOutlined />}
                type={'primary'}
                onClick={onClickCreate}
              >
                Create Your Own
              </Button>
            </div>
            <img
              className='dashboard-carousel-image'
              src={BGIMAGE}
              alt={'Carousel img'}
            />
          </div>
        </Carousel>
      </div>
      <div className='dashboard-listings'>
        <Divider />
        <PageHeader
          className='dashboard-list-header'
          title='Featured Collections'
        />
        <Divider />
        <PageHeader
          className='dashboard-list-header'
          title='Trading Collections'
        />
        <Divider />
        <PageHeader className='dashboard-list-header' title='New Collections' />
        <Divider />
      </div>
    </div>
  )
}

export default Dashboard
