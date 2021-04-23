import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { authStateSelector, profileStateSelector } from 'redux/selectors'
import { loginAction, logoutAction } from 'redux/Reducers/Auth'
import { getProfileAction } from 'redux/Reducers/Profile'
import { APP_NAME, IS_PENDING } from 'constants/Constants'

import HeaderComponent from 'components/Header'

import PATHS from 'constants/Path'

const Header = ({
  auth,
  profile,
  loginAction,
  logoutAction,
  getProfileAction,
  ...otherProps
}) => {
  const { ethereum } = window
  const { payload } = profile
  const { status, token, error } = auth

  const [waitingWallet, setWaitingWallet] = useState(false)

  const history = useHistory()

  const isPending = status => {
    return status.indexOf(IS_PENDING) > -1
  }

  const isAuthenticated = () => {
    return token
  }

  const isError = () => {
    return error
  }

  const isMetaMaskInstalled = () => {
    return Boolean(ethereum && ethereum.isMetaMask)
  }

  const MetaMaskClientCheck = () => {
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      alert(
        'Metamask has not installed yet, please install Metamask wallet first!'
      )
      return false
    } else {
      return true
    }
  }

  const onWalletConnect = async () => {
    try {
      // * Will open the MetaMask UI
      // * You should disable this button while the request is pending!
      setWaitingWallet(true)
      const wallets = await ethereum.request({ method: 'eth_requestAccounts' })
      setWaitingWallet(false)
      return wallets
    } catch (error) {
      console.error(error)
      setWaitingWallet(false)
      return null
    }
  }

  const loginHandler = async () => {
    if (!MetaMaskClientCheck()) {
      return
    }

    if (isAuthenticated()) {
      history.push(PATHS.PROFILE)
      return
    }

    const res = await onWalletConnect()

    if (res !== null && res.length) {
      // TODO axios call
      console.log('LoginAction! walletId:', res[0])
      loginAction({
        body: {
          walletId: res[0],
        },
        onSuccess: response => {
          getProfileAction({
            header: { Authorization: `Bearer ${response.data.token}` },
          })
        },
      })
    }
  }

  const logoutHandler = () => {
    logoutAction({
      onSuccess: localStorage.removeItem(APP_NAME),
    })
  }

  return (
    <HeaderComponent
      avatar={payload ? payload.avatarUrl : false}
      nickname={payload ? payload.nickname : 'Person'}
      walletId={payload ? payload.walletId : ''}
      isPending={isPending(status) || waitingWallet}
      isAuthenticated={isAuthenticated()}
      isError={isError()}
      loginHandler={loginHandler}
      logoutHandler={logoutHandler}
      {...otherProps}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  auth: authStateSelector,
  profile: profileStateSelector,
})

const mapDispatchToProps = {
  loginAction,
  logoutAction,
  getProfileAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
