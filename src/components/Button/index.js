import React from 'react'

import { CustomButton } from './style'

const Button = ({ children, ...otherProps }) => {
  return <CustomButton>{children}</CustomButton>
}

export default Button
