import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Dashboard from 'pages/Dashboard'
import Account from 'pages/Account'
import Tradings from 'pages/Tradings'
import Creators from 'pages/Creators'

import PATHS from 'constants/Path'

const Routers = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path={PATHS.DASHBOARD} components={Dashboard} />
          <Route path={PATHS.TRADINGS} components={Tradings} />
          <Route path={PATHS.CREATORS} components={Creators} />
          <Route path={`${PATHS.ACCOUNT}/:accountId`} components={Account} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Routers
