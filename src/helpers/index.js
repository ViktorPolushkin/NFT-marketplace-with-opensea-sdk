import TokenCard from 'components/TokenCard'
import CollectionCard from 'components/CollectionCard'
import CreatorCard from 'components/CreatorCard'
import CollectionItemCard from 'components/CollectionItemCard'

export const generateTokenCards = (
  tokens,
  rate,
  onClickEdit,
  onClickCard,
  onViewItem,
  onClickLike
) =>
  tokens &&
  tokens.map((token, index) => (
    <TokenCard
      key={index}
      collectionId={token.collectionId}
      id={token.id}
      url={token.detail.url}
      name={token.detail.name}
      prise={token.detail.prise}
      rate={rate}
      likes={token.meta.likes}
      views={token.meta.views}
      inAuction={token.auction.inAuction}
      onViewItem={onViewItem}
      onClickEdit={onClickEdit}
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
      onClickEdit={onClickEdit}
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
