import React from 'react'
import { useParams } from 'react-router-dom'

import AccountContainer from 'containers/Account'

import useStyles from './style'

const Account = () => {
  let { accountId } = useParams()
  const classes = useStyles()

  return <AccountContainer accountId={accountId} />
}

export default Account
