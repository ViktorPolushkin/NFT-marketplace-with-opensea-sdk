import React from 'react'

import { Edit3 } from 'react-feather'

import {
  BannerWrapper,
  BannerBackground,
  BannerChooseBgButton,
  BannerChooseBgEdit,
  BannerAccountInfo,
  AccountAvatarSelector,
  AccountAvatarImageWrapper,
  AccountIdWrapper,
  AccountWalletIdWrapper,
  BannerQuickLinks,
} from './style'

const AccountBanner = ({
  bannerBg,
  accountImg,
  accountId = 'Person',
  walletId,
}) => {
  return (
    <BannerWrapper>
      <BannerBackground>
        <BannerChooseBgButton />
        <BannerChooseBgEdit>
          <Edit3 />
        </BannerChooseBgEdit>
      </BannerBackground>
      <BannerAccountInfo>
        <AccountAvatarSelector />
        <AccountAvatarImageWrapper />
        <AccountIdWrapper>{accountId}</AccountIdWrapper>
        <AccountWalletIdWrapper>0xa123...1235</AccountWalletIdWrapper>
      </BannerAccountInfo>
      <BannerQuickLinks></BannerQuickLinks>
    </BannerWrapper>
  )
}

export default AccountBanner
