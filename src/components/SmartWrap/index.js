import React from 'react'

import './style.less'

const SmartWrap = ({ children }) => (
  <div className='smart-wrap'>
    <div className='smart-wrapper'>{children}</div>
  </div>
)

export default SmartWrap
