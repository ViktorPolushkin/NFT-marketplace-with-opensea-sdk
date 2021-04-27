import React, { useEffect } from 'react'

import './style.less'

const CollectionCard = ({
  owner,
  collectionId,
  url,
  name,
  onViewCollection = () => {},
  onClickCard,
}) => {
  useEffect(() => {
    onViewCollection()
  }, [onViewCollection])

  return (
    <div
      className='collection-card'
      onClick={e => onClickCard(owner, collectionId)}
    >
      <div className='collection-card-image'>
        {url ? (
          <img src={url} alt='Collection img' width={'100%'} />
        ) : (
          <div>:D IMAGE :P</div>
        )}
      </div>
      <div className='collection-card-info'>
        <div className='collection-card-info-title'>Collection Card</div>
        <div className='collection-card-info-comment'>{name}</div>
      </div>
    </div>
  )
}

export default CollectionCard
