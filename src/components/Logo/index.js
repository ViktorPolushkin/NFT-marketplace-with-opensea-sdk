import React from 'react'
import { useHistory } from 'react-router-dom'

import PATHS from 'constants/Path'

import LOGO from './logo512.png'

import { LogoImage, AppName } from './style'

const Logo = () => {
  const history = useHistory()

  const onClickHandler = e => {
    e.preventDefault()

    history.push(PATHS.DASHBOARD)
  }

  return (
    <>
      <LogoImage src={LOGO} alt={'App Logo'} onClick={onClickHandler} />
      <AppName onClick={onClickHandler}>Opensea demo</AppName>
    </>
  )
}

export default Logo
