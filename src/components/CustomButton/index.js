import React from 'react'
import Button from '@material-ui/core/Button'

import useStyles from './style'

const CustomButton = ({ children, ...otherProps }) => {
  const classes = useStyles()

  return (
    <Button className={classes.button} {...otherProps}>
      {children}
    </Button>
  )
}

export default CustomButton
