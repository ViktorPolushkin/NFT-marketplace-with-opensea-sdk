import Card from 'components/Card'

export const generateCards = (
  collections,
  onViewCollection,
  onClickLike,
  onClickCard
) => {
  let cards = []
  collections.forEach((collection, index) => {
    cards.push(
      <Card
        key={index}
        owner={collection.owner}
        collectionId={collection.collectionId}
        url={collection.url}
        title={collection.title}
        value={collection.value}
        inAuction={collection.inAuction}
        lastBid={collection.lastBid}
        rate={collection.rate}
        views={collection.views}
        likes={collection.likes}
        onViewCollection={onViewCollection}
        onClickLike={onClickLike}
        onClickCard={onClickCard}
      />
    )
  })

  return cards
}
