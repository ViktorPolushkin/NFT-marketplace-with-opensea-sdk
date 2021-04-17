import React from 'react'

import CollectionBrowser from 'components/CollectionBrowser'
import FilterBar from 'components/FilterBar'

import { BrowseWrapper } from './style'

const Browse = () => {
  return (
    <BrowseWrapper>
      <FilterBar />
      <CollectionBrowser />
    </BrowseWrapper>
  )
}

export default Browse
