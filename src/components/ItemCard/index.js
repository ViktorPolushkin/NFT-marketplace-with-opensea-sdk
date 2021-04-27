import React, { useEffect } from 'react'
import { LikeOutlined, EyeOutlined } from '@ant-design/icons'

import './style.less'

const ItemCard = ({
  owner,
  collectionId,
  url,
  name,
  value,
  inAuction,
  lastBid,
  limit,
  rate,
  views,
  likes,
  onViewCollection = () => {},
  onClickLike,
  onClickCard,
}) => {
  useEffect(() => {
    onViewCollection()
  }, [onViewCollection])

  return (
    <div className='item-card' onClick={e => onClickCard(owner, collectionId)}>
      <div className='item-card-image'>
        {url ? (
          <img src={url} alt='Collection img' width={'100%'} />
        ) : (
          <div>:D IMAGE :P</div>
        )}
      </div>
      <div className='item-card-info'>
        <div className='item-card-info-collection'>
          <div className='item-card-info-title'>{name}</div>
          <div className='item-card-info-value'>{`${value} BNB ≈ ${Number(
            rate * value
          ).toFixed(2)} USD`}</div>
        </div>
        <div className='item-card-info-likes-views'>
          <div className='item-card-info-likes' onClick={() => onClickLike()}>
            {likes}
            <LikeOutlined />
          </div>
          <div className='item-card-info-views'>
            {views}
            <EyeOutlined />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
