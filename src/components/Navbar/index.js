import React from 'react'
import { Link } from 'react-router-dom'

import { NavbarWrapper } from './style'

import PATHS from 'constants/Path'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to={PATHS.BROWSE_ASSETS}>Browse</Link>
      <Link to={PATHS.CREATORS}>Creators</Link>
      <Link to={PATHS.COLLECTIONS}>Create</Link>
    </NavbarWrapper>
  )
}

export default Navbar
