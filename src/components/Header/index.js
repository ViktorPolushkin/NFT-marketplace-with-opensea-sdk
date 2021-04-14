import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Logo from 'components/Logo'
import SearchLine from 'components/SearchLine'
import Navbar from 'components/Navbar'
import Avatar from 'components/Avatar'
import Loading from 'components/Loading'

import PATHS from 'constants/Path'

import AVATAR from 'resources/avatar.png'

import { HeaderWrapper } from './style'

const Header = ({ isLoading, isLoggedIn, ...otherProps }) => {
  const [walletId, setWalletId] = useState('')

  const history = useHistory()
  const { ethereum } = window

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

  const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      const walletId = await ethereum.request({ method: 'eth_requestAccounts' })
      if (walletId) {
        setWalletId(walletId)
        console.log(walletId)
        return walletId
      } else {
        alert('WalletId is empty???')
        return null
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const onClickHandler = async e => {
    e.preventDefault()

    if (walletId) {
      history.push(PATHS.ACCOUNT)
    } else {
      if (MetaMaskClientCheck()) {
        const res = await onClickConnect()
        if (res) {
          // TODO axios call
          history.push(PATHS.ACCOUNT)
        }
      } else {
        return
      }
    }
  }
  return (
    <HeaderWrapper>
      <Logo />
      <SearchLine placeholder={'Search tradings, creators'} />
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : isLoggedIn ? (
        <Avatar
          source={AVATAR}
          accountId={'kitmist'}
          walletId={walletId}
          status={true}
          onClick={e => onClickHandler(e)}
        />
      ) : (
        <Avatar onClick={e => onClickHandler(e)} />
      )}
    </HeaderWrapper>
  )
}

export default Header
