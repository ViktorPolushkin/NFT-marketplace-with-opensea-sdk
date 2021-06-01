import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { tokenStateSelector } from 'redux/selectors'
import { getTokenAction, updateTokenAction } from 'redux/Reducers/Token'

import { storage } from 'configuration/Firebase'

import TokenSellComponent from 'components/TokenSell'

const TokenSell = ({ match, token, getTokenAction, updateTokenAction }) => {
  const [prise, setPrise] = useState(0)
  const [tokenDetail, setTokenDetail] = useState({})

  const { tokenId } = match.params

  useEffect(() => {
    getTokenAction({
      params: tokenId,
      onSuccess: payload => {
        setTokenDetail(payload.data.detail)
      },
    })
  }, [tokenId, getTokenAction])

  const onPriceChange = value => {
    setPrise(value)
  }

  const onPostListing = () => {
    console.log(tokenDetail)
    updateTokenAction({
      body: {
        listed: true,
        prise: prise.toString(),
        name: tokenDetail.name,
        description: tokenDetail.description,
        url: tokenDetail.url,
        creator: tokenDetail.creator,
        owner: tokenDetail.owner,
        fee: 4,
      },
      params: tokenId,
    })
  }

  return (
    <TokenSellComponent
      currentPrise={tokenDetail && tokenDetail.prise}
      onPriceChange={onPriceChange}
      onPostListing={onPostListing}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  token: tokenStateSelector,
})

const mapDispatchToProps = {
  getTokenAction,
  updateTokenAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenSell)
