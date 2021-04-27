import React from 'react'
import { PageHeader } from 'antd'

import CreatorCard from 'components/CreatorCard'

import './style.less'

const Creators = () => {
  return (
    <div className='creators'>
      <div className='creators-page-header'>
        <PageHeader className='creators-page-header-title' title={'Creators'} />
      </div>
      <div className='creators-assets'>
        <div className='creators-assets-wrap'>
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
        </div>
      </div>
    </div>
  )
}

export default Creators
