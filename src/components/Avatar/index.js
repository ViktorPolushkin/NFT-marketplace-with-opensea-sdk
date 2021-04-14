import React from 'react'

import AVATAR from './logo512.png'

import {
  AvatarWrapper,
  AvatarImage,
  AvatarName,
  AccountId,
  WalletId,
  AccountStatus,
} from './style'

const Avatar = ({
  source,
  size,
  accountId,
  walletId,
  status,
  onClick,
  ...otherProps
}) => {
  return (
    <AvatarWrapper accountId={accountId} size={size} onClick={onClick}>
      {accountId && (
        <>
          <AvatarName>
            <AccountId tootips={accountId}>{accountId}</AccountId>
            <WalletId tootips={walletId}>{walletId}</WalletId>
          </AvatarName>
          <AccountStatus status={status} />
        </>
      )}
      <AvatarImage src={source || AVATAR} alt='User Avatar' />
    </AvatarWrapper>
  )
}

export default Avatar
