import React from 'react'
import { Route } from 'react-router-dom'

import CollectionContainer from 'containers/Collection'
import CollectionDetailPage from './CollectionDetail'
import CollectionEditPage from './CollectionEdit'

import 'styles/style.less'

const Collection = ({ match }) => {
  return (
    <div className='page'>
      <Route
        exact
        path={`${match.url}/:collectionId`}
        component={CollectionDetailPage}
      />
      <Route
        exact
        path={`${match.url}/:collectionId/edit`}
        component={CollectionEditPage}
      />
      <Route exact path={match.url} component={CollectionContainer} />
    </div>
  )
}

export default Collection
