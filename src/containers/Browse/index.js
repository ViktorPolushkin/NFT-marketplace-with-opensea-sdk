import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useHistory } from 'react-router-dom'

import BrowseComponent from 'components/Browse'

const Browse = () => {
  const history = useHistory()

  const collections = [
    // {
    //   owner: 'anonymous',
    //   collectionId: '1234567890',
    //   url: null,
    //   title: 'One of a kind NFT',
    //   value: 12,
    //   inAuction: false,
    //   lastBid: 22,
    //   rate: 600,
    //   likes: 3,
    //   views: 18,
    // },
    // {
    //   owner: 'anonymous',
    //   collectionId: '1234567891',
    //   url: null,
    //   title: 'One of a NFT Card with Awesome Future',
    //   value: 1906,
    //   inAuction: false,
    //   lastBid: 17,
    //   rate: 800,
    //   likes: 201,
    //   views: 1000,
    // },
  ]

  const onClickLike = () => {}

  const onViewCollection = () => {}

  const onClickCard = (owner, collectionId) => {
    console.log(owner, collectionId)
    history.push(`${owner}/${collectionId}`)
  }

  return (
    <BrowseComponent
      collections={collections}
      onClickLike={onClickLike}
      onViewCollection={onViewCollection}
      onClickCard={onClickCard}
    />
  )
}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
