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
    history.push(PATHS.COLLECTION)
  }

  return (
    <div className='dashboard'>
      <div className='dashboard-carousel'>
        <Carousel autoplay dotPosition={'top'} effect={'fade'}>
          <div className='dashboard-carousel-image-wrap'>
            <div className='dashboard-carousel-image-info'>
              <span style={{color: '#fff'}}>
                <strong>Focus Market</strong> is a platform where photographers can supplement thier income by minting and selling their original photographs on the first all-photography NFT marketplace.
              </span>
              <Button
                size={'large'}
                shape={'round'}
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
              <span style={{ color: '#fff'}}>
                The first NFT marketplace for the global Photography market. Binance Smart Chain and Ethereum Dual Network Support
              </span>
              <Button
                size={'large'}
                shape={'round'}
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
