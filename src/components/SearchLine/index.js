import React from 'react'
import { Search } from 'react-feather'

import { SearchLineIcon, SearchLineInput } from './style'

const SearchLine = ({ ...otherProps }) => (
  <>
    <SearchLineIcon htmlFor='search'>
      <Search />
    </SearchLineIcon>
    <SearchLineInput id='search' {...otherProps} />
  </>
)

export default SearchLine
