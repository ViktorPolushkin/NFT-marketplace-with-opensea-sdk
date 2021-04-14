import styled from 'styled-components'

export const AvatarWrapper = styled.div`
  position: relative;
  border-radius: 24px;
  background-color: #262b2f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 2px 2px ${props => (props.accountId ? 12 : 2)}px;
  box-shadow: 0 0 8px 1px #262b2f;
  margin-left: 8px;
  cursor: pointer;

  & img {
    margin-left: ${props => props.accountId && 8}px;
  }
`

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: ${props => props.size || 40}px;
  height: ${props => props.size || 40}px;
`

export const AvatarName = styled.div`
  max-width: 64px;
  display: flex;
  flex-direction: column;
  padding-bottom: 4px;
  cursor: pointer;
`

export const AccountId = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const WalletId = styled.div`
  font-size: 10px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const AccountStatus = styled.div`
  position: absolute;
  top: 24px;
  right: 30px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: ${props => (props.status ? '#41a941' : '#656262')};
`
