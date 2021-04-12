import React from 'react'
import Link from '@material-ui/core/Link'

import useStyles from './style'

const CustomLink = ({ children, ...otherProps }) => {
  const classes = useStyles()

  return (
    <Link className={classes.link} {...otherProps}>
      {children}
    </Link>
  )
}

export default CustomLink
