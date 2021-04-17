import React from 'react'

import { Star, Clock } from 'react-feather'

import {
  CollectionCardWrapper,
  CardHeaderWrapper,
  CardHeader,
  CardLikes,
  CardImageWrapper,
  PriceWrapper,
  InfoWrapper,
  Info,
  Creator,
  Name,
  PriceWrap,
  PriceTitle,
  Price,
  AuctionInfoWrapper,
  AuctionTimeLeft,
  AuctionLastBid,
} from './style'

const CollectionCard = ({
  creator,
  name,
  price,
  likes,
  isAuction,
  timeLeft,
  lastBid,
}) => {
  const onClickHandler = e => {
    e.preventDefault()

    console.log(name)
  }

  return (
    <CollectionCardWrapper onClick={e => onClickHandler(e)}>
      <CardHeaderWrapper>
        <CardHeader>
          <Star id='likes' />
          <CardLikes htmlFor='likes'>{likes}</CardLikes>
        </CardHeader>
      </CardHeaderWrapper>
      <CardImageWrapper></CardImageWrapper>
      <PriceWrapper>
        <InfoWrapper>
          <Info>
            <Creator>{creator}</Creator>
            <Name>{name}</Name>
          </Info>
          <PriceWrap>
            <PriceTitle>Price</PriceTitle>
            <Price>{`ETH: ${
              price.toPrecision().length > 6
                ? parseFloat(price.toPrecision().slice(0, 6))
                : price
            }`}</Price>
          </PriceWrap>
        </InfoWrapper>
        <AuctionInfoWrapper>
          {isAuction && (
            <>
              <AuctionTimeLeft>
                <Clock />
                {timeLeft && `${timeLeft}min left`}
              </AuctionTimeLeft>
              <AuctionLastBid>{`ETH: ${
                lastBid.toPrecision().length > 6
                  ? parseFloat(lastBid.toPrecision().slice(0, 6))
                  : lastBid
              }`}</AuctionLastBid>
            </>
          )}
        </AuctionInfoWrapper>
      </PriceWrapper>
    </CollectionCardWrapper>
  )
}

export default CollectionCard
