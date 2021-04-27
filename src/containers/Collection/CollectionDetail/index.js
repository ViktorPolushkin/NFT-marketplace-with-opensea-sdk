import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionDetailComponent from 'components/CollectionDetail'

const CollectionDetail = () => {
  return <CollectionDetailComponent />
}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetail)
