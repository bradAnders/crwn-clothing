import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

// CollectionPage is a Route in ShopPage.js, so we get match automatically
const CollectionPage = ({ match: { params: { collectionId }} }) => (
  <div className="category">
    <h2>Collection Page { collectionId }</h2>
    {/* <CollectionItem */}
  </div>
);
 
export default CollectionPage;