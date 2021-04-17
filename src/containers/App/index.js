import React from 'react'
import { Provider } from 'react-redux'
import store from 'redux/ConfigureStore'

import Routers from 'router'

const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  )
}

export default App
