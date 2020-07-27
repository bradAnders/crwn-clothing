import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

// CollectionPage is a Route in ShopPage.js, so we get match automatically
const CollectionPage = ({ collection }) => {
  useEffect(() => {
    // Setup code
    console.log('CollectionPage did mount')

    return () => {
      // Cleanup code
      console.log('CollectionPage will unmount')
    }
  }, []);
  const { title, items } = collection
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(
          item => <CollectionItem key={item.id} item={item} />
        )}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
    ;
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);