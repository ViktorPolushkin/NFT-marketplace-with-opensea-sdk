import React from 'react'

import Logo from 'components/Logo'
import SearchLine from 'components/SearchLine'
import Navbar from 'components/Navbar'
import Avatar from 'components/Avatar'
import Loading from 'components/Loading'

import { HeaderWrapper } from './style'

const Header = ({
  auth,
  walletId,
  nickname,
  avatar,
  isPending,
  isAuthenticated,
  isError,
  loginHandler,
  ...otherProps
}) => {
  return (
    <HeaderWrapper>
      <Logo />
      <SearchLine placeholder={'Search collections, creators'} />
      <Navbar />
      {isPending ? (
        <Loading />
      ) : isAuthenticated ? (
        <Avatar
          source={avatar}
          accountId={nickname}
          walletId={walletId}
          status={true}
          onClick={loginHandler}
        />
      ) : (
        <Avatar onClick={loginHandler} />
      )}
    </HeaderWrapper>
  )
}

export default Header
