import React from 'react'
import { PageHeader } from 'antd'

import CreatorCard from 'components/CreatorCard'

import { generateCreatorCards } from 'helpers'

import './style.less'

const Creators = ({ creators, onClickCard }) => {
  return (
    <div className='creators'>
      <div className='creators-page-header'>
        <PageHeader className='creators-page-header-title' title={'Creators'} />
      </div>
      <div className='creators-assets'>
        <div className='creators-assets-wrap'>
          {generateCreatorCards(creators, onClickCard)}
        </div>
      </div>
    </div>
  )
}

export default Creators
