import styled from 'styled-components'

export const CollectionCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  background-image: linear-gradient(0deg, #4e81c5, #66bbc6);
  margin: 8px;

  &:hover {
    box-shadow: 0 0 10px 1px #4e81c5;
  }
  &:active {
    box-shadow: 0 0 5px 1px #4e81c5;
  }
`

export const CardHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 44px;
  padding: 12px 16px;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  border-radius: 10px;
  padding: 7px;
  background-image: linear-gradient(270deg, #4e81c5, #66bbc6);

  & svg {
    width: 18px;
    height: 18px;

    &:hover {
      color: #cc504b;
    }
  }
`

export const CardLikes = styled.label`
  padding-bottom: 5px;
  font-size: 13px;
  margin-left: 5px;
  cursor: pointer;
`

export const CardImageWrapper = styled.div`
  margin: 8px;
  border-radius: 10px;
  background-color: black;
  height: 240px;
`

export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 0 0%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Creator = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Name = styled.div`
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0%;
  align-items: flex-end;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const PriceTitle = styled.span`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Price = styled.div`
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const AuctionInfoWrapper = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
`

export const AuctionTimeLeft = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 12px;
  padding: 3px 5px 5px;
  background-image: linear-gradient(270deg, #4e81c5, #66bbc6);

  & svg {
    width: 12px;
    height: 12px;
    margin-right: 3px;
  }
`

export const AuctionLastBid = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  border-radius: 10px;
  font-size: 12px;
  padding: 3px 5px 5px;
  background-image: linear-gradient(90deg, #4e81c5, #66bbc6);
`
