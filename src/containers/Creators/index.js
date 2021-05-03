import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { userStateSelector } from 'redux/selectors'
import { getCreatorsAction } from 'redux/Reducers/User'
import { useHistory } from 'react-router-dom'

import CreatorsComponent from 'components/Creators'

const Creators = ({ match, users, getCreatorsAction, ...otherProps }) => {
  const history = useHistory()

  useEffect(() => {
    getCreatorsAction()
  }, [getCreatorsAction])

  const onClickCard = (nickname = 'Creator') => {
    history.push(`/creators/${nickname /*.replaceAll(' ', '')*/}/`)
  }

  return <CreatorsComponent creators={users.users} onClickCard={onClickCard} />
}

const mapStateToProps = createStructuredSelector({
  users: userStateSelector,
})

const mapDispatchToProps = {
  getCreatorsAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Creators)
