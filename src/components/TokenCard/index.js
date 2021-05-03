import React from 'react'
import {
  EditFilled,
  LikeOutlined,
  EyeOutlined,
  LoadingOutlined,
} from '@ant-design/icons'

import './style.less'

const TokenCard = ({
  collectionId,
  id,
  url,
  name,
  prise,
  rate,
  likes,
  views,
  inAuction,
  onViewItem,
  onClickEdit,
  onClickLike,
  onClickCard,
}) => (
  <div className='token-card'>
    <div
      className='token-card-edit'
      onClick={() => onClickEdit(collectionId, id)}
    >
      <EditFilled />
    </div>
    <div
      className='token-card-image'
      onClick={() => {
        onViewItem()
        onClickCard(collectionId, id)
      }}
    >
      {url ? (
        <img src={url} alt='Collection img' width={'100%'} />
      ) : (
        <div>
          <LoadingOutlined />
        </div>
      )}
    </div>
    <div
      className='token-card-info'
      onClick={() => {
        onViewItem()
        onClickCard(collectionId, id)
      }}
    >
      <div className='token-card-info-collection'>
        <div className='token-card-info-title'>{name}</div>
        <div className='token-card-info-value'>{`${prise} BNB ≈ ${Number(
          rate * prise
        ).toFixed(2)} USD`}</div>
      </div>
      <div className='token-card-info-likes-views'>
        <div className='token-card-info-likes' onClick={onClickLike}>
          {likes}
          <LikeOutlined />
        </div>
        <div className='token-card-info-views'>
          {views}
          <EyeOutlined />
        </div>
      </div>
    </div>
  </div>
)

export default TokenCard
