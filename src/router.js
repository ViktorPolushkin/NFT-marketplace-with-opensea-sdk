import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Dashboard from 'pages/Dashboard'
import Browse from 'pages/Browse'
import Creators from 'pages/Creators'
import Collections from 'pages/Collections'
import Account from 'pages/Account'

import PATHS from 'constants/Path'

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
        <Route path={PATHS.BROWSE_ASSETS} component={Browse} />
        <Route path={PATHS.CREATORS} component={Creators} />
        <Route path={PATHS.COLLECTIONS} component={Collections} />
        <Route path={PATHS.ACCOUNT} component={Account} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers
