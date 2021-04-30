import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { userStateSelector } from 'redux/selectors'
import { getCreatorsAction } from 'redux/Reducers/User'
import { useHistory } from 'react-router-dom'

import CreatorDetailComponent from 'components/CreatorDetail'

const CreatorDetail = ({ match, users, getCreatorsAction, ...otherProps }) => {
  const history = useHistory()
  const [currentCreator, setCurrentCreator] = useState({})

  useEffect(() => {
    getCreatorsAction({
      onSuccess: ({ data }) => {
        data.map(
          (item, index) =>
            item.nickname === match.params.userId && setCurrentCreator(item)
        )
      },
    })
  }, [getCreatorsAction, match])

  const onClickHandler = () => {}

  console.log('CU:', currentCreator)
  return (
    <CreatorDetailComponent
      walletId={currentCreator.walletId}
      banner={currentCreator.banner}
      avatar={currentCreator.avatar}
      nickname={currentCreator.nickname}
      email={currentCreator.email}
      description={currentCreator.description}
      website={currentCreator.website}
      discord={currentCreator.discord}
      collections={currentCreator.collections}
      onClickHandler={onClickHandler}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  users: userStateSelector,
})

const mapDispatchToProps = {
  getCreatorsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorDetail)
