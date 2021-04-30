import ItemCard from 'components/ItemCard'
import CollectionCard from 'components/CollectionCard'
import CreatorCard from 'components/CreatorCard'

export const generateItemCards = (
  collections,
  onViewItem,
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
          onViewItem={onViewItem}
          onClickLike={onClickLike}
          onClickCard={onClickCard}
        />
      )
    })

  return cards
}

export const generateCollectionCards = (
  collections,
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
          onClickCard={onClickCard}
          onClickEdit={onClickEdit}
        />
      )
    })

  return cards
}

export const generateCreatorCards = (creators, onClickCard) => {
  let cards = []
  creators &&
    creators.forEach((creator, index) => {
      console.log('A Creator', creator)
      cards.push(
        <CreatorCard
          key={index}
          banner={creator.banner}
          avatar={creator.avatar}
          nickname={creator.nickname}
          onClickCard={onClickCard}
        />
      )
    })

  return cards
}
