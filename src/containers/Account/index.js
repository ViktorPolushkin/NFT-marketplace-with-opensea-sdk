import React from 'react'
import { connect } from 'react-redux'

import AccountComponent from 'components/Account'

const Account = ({ accountId, ...otherProps }) => {
  const account = accountId

  return <AccountComponent />
}

export default Account
