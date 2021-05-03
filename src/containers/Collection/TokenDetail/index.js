import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { tokenStateSelector, userStateSelector } from 'redux/selectors'
import { getTokenAction, updateTokenAction } from 'redux/Reducers/Token'

import TokenDetailComponent from 'components/TokenDetail'

import TEST from 'resources/background.jpg'

const TokenDetail = ({ match, token, getTokenAction }) => {
  const { tokenId } = match.params
  const tokenContent = token.content

  useEffect(() => {
    getTokenAction({
      params: tokenId,
    })
  }, [getTokenAction, tokenId])

  const testToken = {
    collectionId: 'testCollection',
    id: '5663766592345673562435234523452345',
    address: '0xA7482C9c5926E88d85804A969c383730Ce100639',
    type: 'Ethereum',
    detail: {
      url: TEST,
      name: 'testToken',
      description: 'test token information description',
      creator: '0x234l2k3423n4l2i342l3k4nl2i3n42f',
      owner: '0xqb230492304j2039v0s90f9w3234234',
      listed: false,
    },
    offer: [],
    meta: {
      views: '2',
      likes: '1',
    },
  }

  return <TokenDetailComponent token={testToken} />
}

const mapStateToProps = createStructuredSelector({
  token: tokenStateSelector,
})

const mapDispatchToProps = {
  getTokenAction,
  updateTokenAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenDetail)
