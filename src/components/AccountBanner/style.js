import styled from 'styled-components'

export const BannerWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`

export const BannerBackground = styled.div`
  border-radius: 10px;
  position: relative;
  width: 100%;
  height: 240px;
  min-height: 120px;
  background-color: grey;
  overflow: hidden;
`

export const BannerChooseBgButton = styled.input.attrs({
  type: 'file',
})`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  border: 1px solid #222;
  border-radius: 10px;
  background-color: #222;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
`

export const BannerChooseBgEdit = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 16px;
  right: 16px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #222;
  background-color: #222;
  cursor: pointer;
  z-index: 1;

  & svg {
    color: white;
    width: 25px;
    height: 25px;
  }
`

export const BannerAccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -64px;
  margin-bottom: 12px;
  background-color: transparent;
`

export const AccountAvatarSelector = styled.input.attrs({
  type: 'file',
})`
  position: relative;
  display: flex;
  justify-content: center;
  width: 130px;
  min-width: 130px;
  height: 130px;
  min-height: 130px;
  border: 2px solid #222;
  border-radius: 50%;
  background-color: #222;
  cursor: pointer;
  opacity: 0;
  z-index: 2;

  &::before {
    content: '';
    opacity: 0;
  }

  &:hover {
    &::before {
      content: 'Edit';
      position: absolute;
      width: 115px;
      height: 25px;
      left: 5px;
      bottom: 25px;
      background-color: #2228;
      opacity: 1;
    }
  }
`

export const AccountAvatarImageWrapper = styled.div`
  position: absolute;
  width: 130px;
  min-width: 130px;
  height: 130px;
  min-height: 130px;
  border: 2px solid #222;
  border-radius: 50%;
  background-color: grey;
  cursor: pointer;
`

export const AccountIdWrapper = styled.span`
  color: white;
  font-size: 36px;
`

export const AccountWalletIdWrapper = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 300;
`

export const BannerQuickLinks = styled.div`
  position: absolute;
`
