import React from 'react'
import { PageHeader } from 'antd'
import SmartWrap from 'components/SmartWrap'

import { generateCollectionItems } from 'helpers'

import './style.less'

const ProfileDataItem = ({ title, info }) => (
  <div className='creator-detail-profile-item'>
    <div className='creator-detail-profile-item-title'>{title}</div>
    <div className='creator-detail-profile-item-info'>{info}</div>
  </div>
)

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
      <div className='creator-detail-profile-user'>
        <ProfileDataItem title={'Email:'} info={email} />
        <ProfileDataItem title={'Description:'} info={description} />
        <ProfileDataItem title={'Website:'} info={`www.${website}.com`} />
        <ProfileDataItem title={'Discord:'} info={discord} />
        <ProfileDataItem
          title={'Collections:'}
          info={generateCollectionItems(collections)}
        />
      </div>
      <div className='creator-detail-profile-items'></div>
    </div>
  </div>
)

export default CreatorDetail
