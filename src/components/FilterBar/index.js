import React from 'react'

import Button from 'components/Button'

import { FilterBarWrapper } from './style'

const FilterBar = () => {
  return (
    <FilterBarWrapper>
      <Button>All Arts</Button>
      <Button>Recently Listed</Button>
      <Button>Highest Price</Button>
      <Button>Recently created</Button>
      <Button>Highest Last Sale</Button>
      <Button>Expiring Soon</Button>
      <Button>Oldest</Button>
      <Button>Lowest Price</Button>
      <Button>Most Views</Button>
    </FilterBarWrapper>
  )
}

export default FilterBar
