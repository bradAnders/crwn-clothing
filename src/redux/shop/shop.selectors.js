import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => 
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

// Have to memoize this way because the return is a dynamic function
export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => 
      collections ? collections[collectionUrlParam] : null
  )
);