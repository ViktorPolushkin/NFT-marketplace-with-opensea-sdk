import React from 'react'
import {} from 'antd'

import './style.less'

const CollectionDetail = ({
  bannerUrl,
  name,
  description,
  tokens,
  onChange,
  onCreate,
  customRequest,
}) => {
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
    </div>
  )
}

export default CollectionDetail
