import React from 'react'
import { Button } from 'antd'
import {
  FacebookFilled,
  TwitterCircleFilled,
  WhatsAppOutlined,
} from '@ant-design/icons'

import MASK_IMAGE from 'resources/shape-avatar.svg'

import './style.less'

const FollowerItem = ({ header, comment }) => (
  <div className='creator-card-properties-items'>
    <div className='creator-card-properties-items-header'>{header}</div>
    <div className='creator-card-properties-items-comment'>{comment}</div>
  </div>
)

const CreatorCard = ({
  avatar = '',
  banner = '',
  nickname = 'John Doe',
  comment = 'Creator',
  onClickCard,
}) => (
  <div className='creator-card' onClick={() => onClickCard(nickname)}>
    <div className='creator-card-image'>
      <img
        className='creator-card-image-background'
        src={banner}
        alt='Avatar Mask'
      />
    </div>
    <div className='creator-card-info'>
      <img
        className='creator-card-info-avatar-mask'
        src={MASK_IMAGE}
        alt='Avatar Mask'
      />
      <img
        className='creator-card-info-avatar'
        src={avatar}
        alt='Avatar Mask'
      />
      <div className='creator-card-info-name'>{nickname}</div>
      <div className='creator-card-info-comment'>{comment}</div>
      <div className='creator-card-info-social'>
        <Button size={'large'} shape={'circle'} icon={<FacebookFilled />}></Button>
        <Button size={'large'} shape={'circle'} icon={<TwitterCircleFilled />}></Button>
        <Button size={'large'} shape={'circle'} icon={<WhatsAppOutlined />}></Button>
      </div>
      <div className='creator-card-properties'>
        <FollowerItem header={'Follower'} comment={'46k'} />
        <FollowerItem header={'Follower'} comment={'46k'} />
        <FollowerItem header={'Follower'} comment={'46k'} />
      </div>
    </div>
  </div>
)

export default CreatorCard
