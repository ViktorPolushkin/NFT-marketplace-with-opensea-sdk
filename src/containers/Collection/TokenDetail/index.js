import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { tokenStateSelector } from 'redux/selectors'
import { getTokenAction, updateTokenAction } from 'redux/Reducers/Token'
import { useHistory } from 'react-router-dom'

import PATHS from 'constants/Path'

import TokenDetailComponent from 'components/TokenDetail'

const TokenDetail = ({ match, token, getTokenAction }) => {
  const history = useHistory()

  const { tokenId } = match.params
  const [tokenDetail, setTokenDetail] = useState({})

  useEffect(() => {
    getTokenAction({
      params: tokenId,
      onSuccess: payload => {
        setTokenDetail(payload.data)
      },
    })
  }, [getTokenAction, tokenId])

  const testToken = {
    collectionId: '',
    id: '',
    address: '',
    type: '',
    detail: {
      url: null,
      name: '',
      description: '',
      creator: '',
      owner: '',
      listed: false,
    },
    offer: [],
    meta: {
      views: '',
      likes: '',
    },
  }

  const onSellToken = (collectionId, id) => {
    history.push(`${PATHS.COLLECTION}/${collectionId}/${id}/sell`)
  }

  return (
    <TokenDetailComponent
      token={tokenDetail.id ? tokenDetail : testToken}
      onSellToken={onSellToken}
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

export default connect(mapStateToProps, mapDispatchToProps)(TokenDetail)
