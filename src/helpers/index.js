import ItemCard from 'components/ItemCard'
import CollectionCard from 'components/CollectionCard'

export const generateItemCards = (
  collections,
  onViewCollection,
  onClickLike,
  onClickCard
) => {
  let cards = []
  collections &&
    collections.forEach((collection, index) => {
      cards.push(
        <ItemCard
          key={index}
          owner={collection.owner}
          collectionId={collection.collectionId}
          url={collection.assetUrl}
          name={collection.name}
          value={collection.value || 1}
          inAuction={collection.inAuction}
          lastBid={collection.lastBid}
          rate={collection.rate || 2000}
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

export const generateCollectionCards = (
  collections,
  onViewCollection,
  onClickCard,
  onClickEdit
) => {
  let cards = []
  collections &&
    collections.forEach((collection, index) => {
      cards.push(
        <CollectionCard
          key={index}
          name={collection.name}
          url={collection.url}
          onViewCollection={onViewCollection}
          onClickCard={onClickCard}
          onClickEdit={onClickEdit}
        />
      )
    })

  return cards
}
