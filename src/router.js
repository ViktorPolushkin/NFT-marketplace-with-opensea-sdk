import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { authStateSelector } from 'redux/selectors'
import { createStructuredSelector } from 'reselect'

import { IS_PENDING } from 'constants/Constants'

import Header from 'containers/Header'
import Footer from 'components/Footer'

import Dashboard from 'pages/Dashboard'
import Browse from 'pages/Browse'
import Creators from 'pages/Creators'
import Collections from 'pages/Collections'
import Profile from 'pages/Profile'

import { Spin } from 'antd'

import PATHS from 'constants/Path'

const Router = ({ auth }) => (
  <BrowserRouter>
    <Header auth={auth} />
    <Switch>
      <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
      <Route path={PATHS.BROWSE_ASSETS} component={Browse} />
      <Route path={PATHS.CREATORS} component={Creators} />
      {auth.token && (
        <>
          <Route path={PATHS.COLLECTIONS} component={Collections} />
          <Route path={PATHS.PROFILE} component={Profile} />
        </>
      )}
      <Route
        path={''}
        render={() => !auth.token && <Redirect to={PATHS.DASHBOARD} />}
      />
    </Switch>
    <Footer />
  </BrowserRouter>
)

const RouterWithSpinner = ({ auth }) => (
  <Spin tip={'Please wait...'}>
    <Router auth={auth} />
  </Spin>
)

const Routers = ({ auth }) => {
  return auth.status.indexOf(IS_PENDING) > -1 ? (
    <RouterWithSpinner auth={auth} />
  ) : (
    <Router auth={auth} />
  )
}

const mapStateToProps = createStructuredSelector({
  auth: authStateSelector,
})

export default connect(mapStateToProps, null)(Routers)
