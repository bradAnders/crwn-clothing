import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

// CollectionPage is a Route in ShopPage.js, so we get match automatically
const CollectionPage = ({ match: { params: { collectionId }}, collection: { items } }) => (
  <div className="category">
    <h2>Collection Page { collectionId }</h2>
    {
      items.map(
        item => <CollectionItem  key={ item.id } item={ item } />
      )
    }
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
 
export default connect(mapStateToProps)(CollectionPage);