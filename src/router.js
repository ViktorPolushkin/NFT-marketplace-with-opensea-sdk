import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { authStateSelector } from 'redux/selectors'
import { createStructuredSelector } from 'reselect'
import { getProfileAction } from 'redux/Reducers/Profile'

import { IS_PENDING } from 'constants/Constants'

import Header from 'containers/Header'
import Footer from 'components/Footer'

import Dashboard from 'pages/Dashboard'
import Browse from 'pages/Browse'
import Creators from 'pages/Creators'
import Collection from 'pages/Collection'
import Profile from 'pages/Profile'

import { Spin } from 'antd'

import PATHS from 'constants/Path'

const Router = ({ auth }) => (
  <BrowserRouter>
    <Route component={Header} />
    <Switch>
      <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
      <Route path={PATHS.BROWSE_ASSETS} component={Browse} />
      <Route path={PATHS.CREATORS} component={Creators} />
      {auth.token && (
        <>
          <Route path={PATHS.COLLECTION} component={Collection} />
          <Route path={PATHS.PROFILE} component={Profile} />
        </>
      )}
      <Route
        path={''}
        render={() => !auth.token && <Redirect to={PATHS.DASHBOARD} />}
      />
    </Switch>
    <Route component={Footer} />
  </BrowserRouter>
)

const RouterWithSpinner = ({ auth }) => (
  <Spin tip={'Please wait...'}>
    <Router auth={auth} />
  </Spin>
)

const Routers = ({ auth, getProfileAction }) => {
  useEffect(() => {
    if (auth.token) {
      getProfileAction({})
    }
  }, [auth.token, getProfileAction])

  return auth.status.indexOf(IS_PENDING) > -1 ? (
    <RouterWithSpinner auth={auth} />
  ) : (
    <Router auth={auth} />
  )
}

const mapStateToProps = createStructuredSelector({
  auth: authStateSelector,
})

const mapDispatchToProps = {
  getProfileAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers)
