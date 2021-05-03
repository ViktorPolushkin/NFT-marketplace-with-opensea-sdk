import React from 'react'
import { PageHeader } from 'antd'
import SmartWrap from 'components/SmartWrap'

import { generateCreatorCards } from 'helpers'

import './style.less'

const Creators = ({ creators, onClickCard }) => {
  return (
    <div className='creators'>
      <div className='creators-page-header'>
        <PageHeader className='creators-page-header-title' title={'Creators'} />
      </div>
      <SmartWrap>{generateCreatorCards(creators, onClickCard)}</SmartWrap>
    </div>
  )
}

export default Creators
