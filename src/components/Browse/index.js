import React from 'react'
import { PageHeader } from 'antd'
import { generateItemCards } from 'helpers'

import './style.less'

const Browse = ({
  collections,
  onViewCollection,
  onClickLike,
  onClickCard,
}) => {
  return (
    <div className='browse'>
      <div className='browse-page-header'>
        <PageHeader className='browse-page-header-title' title={'Browses'} />
      </div>
      <div className='browse-assets'>
        <div className='browse-assets-wrap'>
          {generateItemCards(
            collections,
            onViewCollection,
            onClickLike,
            onClickCard
          )}
        </div>
      </div>
    </div>
  )
}

export default Browse
