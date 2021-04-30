import React from 'react'
import { PageHeader } from 'antd'

import './style.less'

const CreatorDetail = ({
  walletId,
  banner,
  avatar,
  nickname,
  email,
  description,
  website,
  discord,
  collections,
  onClickHandler,
}) => (
  <div className='creator-detail'>
    <div className='creator-detail-banner'>
      <img
        className='creator-detail-banner-background'
        src={banner}
        alt='creator_banner_img'
      />
      <img
        className='creator-detail-banner-avatar'
        src={avatar}
        alt='creator_banner_img'
      />
      <div className='creator-detail-banner-nickname'>{nickname}</div>
      <div className='creator-detail-banner-walletId'>{walletId}</div>
    </div>
    <PageHeader className='browse-page-header-title' title={'User Profile'} />
    <div className='creator-detail-profile'>
      <div className='creator-detail-profile-user'>USER PROFILE</div>
      <div className='creator-detail-profile-items'>USER ITEMS</div>
    </div>
  </div>
)

export default CreatorDetail
