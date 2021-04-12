import React from 'react'
import Link from '@material-ui/core/Link'

import useStyles from './style'

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footerWrapper}>
      <Link className={classes.footerLink} href='#'>
        Footer Here
      </Link>
      <Link className={classes.footerLink} href='#'>
        Footer Here
      </Link>
      <div className={classes.footerTitle}>
        OpenSea Similar NFT Token Marketplace
      </div>
      <Link className={classes.footerLink} href='#'>
        Footer Here
      </Link>
      <Link className={classes.footerLink} href='#'>
        Footer Here
      </Link>
    </div>
  )
}

export default Footer
