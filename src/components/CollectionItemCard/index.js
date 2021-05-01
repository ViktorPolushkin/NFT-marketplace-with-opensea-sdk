import React from 'react'

import './style.less'

const CollectionItemCard = ({ url, name }) => (
  <div className='item-card'>
    <img className='item-card-url' src={url} alt='collection url' />
    <div className='item-card-name'>{name}</div>
  </div>
)

export default CollectionItemCard
