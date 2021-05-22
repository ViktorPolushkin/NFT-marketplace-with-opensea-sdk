import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { tokenStateSelector } from 'redux/selectors'
import { getTokenAction, updateTokenAction } from 'redux/Reducers/Token'

import { storage } from 'configuration/Firebase'

import TokenSellComponent from 'components/TokenSell'

const TokenSell = () => {
  return <TokenSellComponent />
}

const mapStateToProps = createStructuredSelector({
  token: tokenStateSelector,
})

const mapDispatchToProps = {
  getTokenAction,
  updateTokenAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenSell)
