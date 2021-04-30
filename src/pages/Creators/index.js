import React from 'react'
import { Route } from 'react-router-dom'

import CreatorsContainer from 'containers/Creators'
import CreatorDetailPage from './CreatorDetail'

import 'styles/style.less'

const Creators = ({ match }) => {
  return (
    <div className='page'>
      <Route
        exact
        path={`${match.url}/:userId`}
        component={CreatorDetailPage}
      />
      <Route exact path={match.url} component={CreatorsContainer} />
    </div>
  )
}

export default Creators
