import React from 'react'

import CollectionCard from 'components/CollectionCard'

import { CollectionBrowserWrapper, CollectionListWrapper } from './style'

const CollectionBrowser = () => {
  return (
    <CollectionBrowserWrapper>
      <CollectionListWrapper>
        <CollectionCard
          likes={12}
          creator={'Person'}
          name={
            'Test Art Test Art Test Art Test Art Test Art Test Art Test Art'
          }
          price={0.111111111111}
          isAuction={true}
          timeLeft={20}
          lastBid={1.1233333333333333}
        />
        <CollectionCard
          creator={'Person'}
          name={'Test Art'}
          price={0.11}
          likes={15}
        />
        <CollectionCard
          creator={'Person'}
          name={'Test Art'}
          price={0.11}
          likes={15}
        />
        <CollectionCard
          creator={'Person'}
          name={'Test Art'}
          price={0.11}
          likes={15}
        />
        <CollectionCard
          creator={'Person'}
          name={'Test Art'}
          price={0.11}
          likes={15}
        />
        <CollectionCard
          creator={'Person'}
          name={'Test Art'}
          price={0.11}
          likes={15}
        />
      </CollectionListWrapper>
    </CollectionBrowserWrapper>
  )
}

export default CollectionBrowser
