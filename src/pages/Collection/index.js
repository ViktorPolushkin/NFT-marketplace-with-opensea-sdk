import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CollectionContainer from 'containers/Collection'
import CollectionDetail from 'containers/Collection/CollectionDetail'
import CollectionEdit from 'containers/Collection/CollectionEdit'
import TokenDetail from 'containers/Collection/TokenDetail'
import TokenEdit from 'containers/Collection/TokenEdit'

import 'styles/style.less'

const Collection = ({ match }) => (
  <div className={'page'}>
    <Switch>
      <Route exact path={match.url} component={CollectionContainer} />
      <Route
        exact
        path={`${match.url}/:collectionId`}
        component={CollectionDetail}
      />
      <Route
        exact
        path={`${match.url}/:collectionId/edit`}
        component={CollectionEdit}
      />
      <Route
        exact
        path={`${match.url}/:collectionId/:tokenId`}
        component={TokenDetail}
      />
      <Route
        path={`${match.url}/:collectionId/:tokenId/edit`}
        component={TokenEdit}
      />
    </Switch>
  </div>
)

export default Collection
