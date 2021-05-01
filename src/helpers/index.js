import ItemCard from 'components/ItemCard'
import CollectionCard from 'components/CollectionCard'
import CreatorCard from 'components/CreatorCard'
import CollectionItemCard from 'components/CollectionItemCard'

export const generateItemCards = (
  collections,
  onViewItem,
  onClickLike,
  onClickCard
) =>
  collections &&
  collections.map((collection, index) => (
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
  ))

export const generateCollectionCards = (
  collections,
  onClickCard,
  onClickEdit
) =>
  collections &&
  collections.map((collection, index) => (
    <CollectionCard
      key={index}
      name={collection.name}
      url={collection.url}
      onClickCard={onClickCard}
      onClickEdit={onClickEdit}
    />
  ))

export const generateCreatorCards = (creators, onClickCard) =>
  creators &&
  creators.map((creator, index) => (
    <CreatorCard
      key={index}
      banner={creator.banner}
      avatar={creator.avatar}
      nickname={creator.nickname}
      onClickCard={onClickCard}
    />
  ))

export const generateCollectionItems = collections =>
  collections &&
  collections.map((collection, index) => (
    <CollectionItemCard
      key={index}
      url={collection.url}
      name={collection.name}
    />
  ))
