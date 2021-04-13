import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import MenuIcon from '@material-ui/icons/Menu'

import CustomButton from 'components/CustomButton'
import CustomLink from 'components/CustomLink'
import CustomButtonGroup from 'components/CustomButtonGroup'
import WalletConnectButton from 'components/WalletConnectButton'

import useStyles from './style'

const Header = ({ location, ...otherProps }) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const preventDefault = event => event.preventDefault()

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position={'static'}>
        <ToolBar>
          <IconButton
            edge={'start'}
            className={classes.menuButton}
            color={'inherit'}
            aria-label={'open drawer'}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant={'h6'} noWrap>
            Tokma Marketplace
          </Typography>
          <div className={classes.grow} />
          <CustomButtonGroup items={['Dashboard', 'Tradings', 'Creators']} />
          <div className={classes.grow} />
          <CustomButton variant='contained' edge='end' onClick={handleOpen}>
            Connect Wallet
          </CustomButton>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.modalContent}>
                <h2 id='transition-modal-title'>Connect your wallet</h2>
                <p id='transition-modal-description'>
                  By connecting your wallet, you agree to our{' '}
                  <CustomLink href='#' onClick={preventDefault}>
                    Terms of Service
                  </CustomLink>{' '}
                  and our{' '}
                  <CustomLink href='#' onClick={preventDefault}>
                    Privacy Policy
                  </CustomLink>
                  .
                  <WalletConnectButton variant='contained' />
                  New to Ethereum?
                  <br />
                  <CustomLink href='#' onClick={preventDefault}>
                    Learn more about wallets
                  </CustomLink>
                </p>
              </div>
            </Fade>
          </Modal>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default Header
