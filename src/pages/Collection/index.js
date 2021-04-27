import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CollectionContainer from 'containers/Collection'
import CollectionDetailPage from './CollectionDetail'

import 'styles/style.less'

const Collection = ({ match }) => {
  return (
    <div className='page'>
      <Route
        path={`${match.url}/:collectionId`}
        component={CollectionDetailPage}
      />
      <Route exact path={match.url} component={CollectionContainer} />
    </div>
  )
}

export default Collection
