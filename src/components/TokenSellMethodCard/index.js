import React, { useState } from 'react'

import './style.less'

const TokenSellMethodCard = ({ title, content, select, onSelect, disabled, ...otherProps }) => (
  <div
    className={`token-sell-card-item ${select && 'selected-item'}`}
    onClick={disabled ? () => { } : onSelect}
    title={disabled && 'Coming soon'}
    {...otherProps}
  >
    {
      disabled && (
        <div className='token-sell-card-item-disabled'>
          Coming soon
        </div>
      )
    }
    <div className='token-sell-card-item-title'>{title}</div>
    <div className='token-sell-card-item-content'>{content}</div>
  </div>
)

export default TokenSellMethodCard
