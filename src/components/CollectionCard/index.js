import React from 'react'
import { EditFilled, LoadingOutlined } from '@ant-design/icons'

import './style.less'

const CollectionCard = ({ url, name, onClickEdit, onClickCard }) => (
  <div className='collection-card'>
    <div className='collection-card-edit' onClick={() => onClickEdit(name)}>
      <EditFilled />
    </div>
    <div className='collection-card-image' onClick={() => onClickCard(name)}>
      {url ? (
        <img src={url} alt='Collection img'/>
      ) : (
        <div>
          {/* :D IMAGE :P */}
          <LoadingOutlined />
        </div>
      )}
    </div>
    <div className='collection-card-info' onClick={() => onClickCard(name)}>
      <div className='collection-card-info-title'>Collection Card</div>
      <div className='collection-card-info-comment'>{name}</div>
    </div>
  </div>
)

export default CollectionCard
