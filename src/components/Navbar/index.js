import React from 'react'
import { Link } from 'react-router-dom'

import { NavbarWrapper, NavbarItem, NavbarDecorator } from './style'

import PATHS from 'constants/Path'

const Navbar = ({ selected }) => {
  return (
    <NavbarWrapper>
      <NavbarItem>
        <Link to={PATHS.BROWSE_ASSETS}>Browse</Link>
        <NavbarDecorator selected={selected} path={PATHS.BROWSE_ASSETS} />
      </NavbarItem>
      {/* <NavbarItem>
        <Link to={PATHS.CREATORS}>Creators</Link>
        <NavbarDecorator selected={selected} path={PATHS.CREATORS} />
      </NavbarItem> */}
      {/* <NavbarItem>
        <Link to={PATHS.COLLECTIONS}>Create</Link>
        <NavbarDecorator selected={selected} path={PATHS.COLLECTIONS} />
      </NavbarItem> */}
    </NavbarWrapper>
  )
}

export default Navbar
