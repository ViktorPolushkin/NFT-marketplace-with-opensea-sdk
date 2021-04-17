import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { authStateSelector } from 'redux/selectors'
import { loginAction } from 'redux/Reducers/Auth'
import { IS_PENDING } from 'constants/Constants'

import HeaderComponent from 'components/Header'

import PATHS from 'constants/Path'

import AVATAR from 'resources/avatar.png'

const Header = ({ auth, loginAction, ...otherProps }) => {
  const [waitingWallet, setWaitingWallet] = useState(false)
  const { status, token, error } = auth
  const history = useHistory()
  const { ethereum } = window

  const isPending = status => {
    console.log('pending Status:', status.indexOf(IS_PENDING))
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
      history.push(PATHS.ACCOUNT)
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
        success: () => {
          history.push(PATHS.ACCOUNT)
        },
      })
    }
  }

  return (
    <HeaderComponent
      avatar={AVATAR}
      auth={auth}
      nickname={'Person'}
      walletId={'123123123123123'}
      isPending={isPending(status) || waitingWallet}
      isAuthenticated={isAuthenticated()}
      isError={isError()}
      loginHandler={() => loginHandler()}
      {...otherProps}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  auth: authStateSelector,
})

const mapDispatchToProps = {
  loginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
