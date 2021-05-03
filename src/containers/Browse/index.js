import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { tokenStateSelector } from 'redux/selectors'
import { getTokensAction } from 'redux/Reducers/Token'
import { useHistory } from 'react-router-dom'

import BrowseComponent from 'components/Browse'

import PATHS from 'constants/Path'

const Browse = ({ token, getTokensAction, ...otherProps }) => {
  const rate = 2000 //! Test value
  const history = useHistory()

  useEffect(() => {
    getTokensAction({})
  }, [getTokensAction])

  const dummyToken = [
    {
      collectionId: 'testCollection',
      id: 'testId',
      detail: {
        url: 'testUrl',
        name: 'testName',
        prise: 1,
      },
      meta: {
        likes: 0,
        views: 0,
      },
      auction: {
        inAuction: false,
      },
    },
  ]

  const onClickLike = () => {}

  const onViewItem = () => {}

  const onClickCard = (collectionId, id) => {
    history.push(`${PATHS.COLLECTION}/${collectionId}/${id}`)
  }

  const onEmptyCreate = () => {
    history.push(PATHS.COLLECTION)
  }

  const onClickEdit = (collectionId, id) => {
    history.push(`${PATHS.COLLECTION}/${collectionId}/${id}/edit`)
  }

  return (
    <BrowseComponent
      tokens={/*token.content || */ dummyToken}
      rate={rate}
      onViewItem={onViewItem}
      onClickLike={onClickLike}
      onClickCard={onClickCard}
      onEmptyCreate={onEmptyCreate}
      onClickEdit={onClickEdit}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  token: tokenStateSelector,
})

const mapDispatchToProps = {
  getTokensAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
