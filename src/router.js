import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'

import PATHS from 'constants/Path'

const Routers = () => {
  return (
    <Router>
      <Route component={Header} />
      <Switch></Switch>
      <Route component={Footer} />
    </Router>
  )
}

export default Routers
