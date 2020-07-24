import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 1,
  womens: 1,
  mens: 1,
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

// Have to memoize this way because the return is a dynamic function
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);