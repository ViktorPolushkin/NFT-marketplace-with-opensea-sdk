import React from 'react'
import { Provider } from 'react-redux'
import store from 'redux/ConfigureStore'
import { WalletProvider } from 'react-binance-wallet'

import Routers from 'router'

const App = () => {
  return (
    <WalletProvider>
      <Provider store={store}>
        <Routers />
      </Provider>
    </WalletProvider>
  )
}

export default App
