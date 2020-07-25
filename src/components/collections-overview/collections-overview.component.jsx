import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const collectionsOverview = ({ collections }) => {
  return (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherProperties }) => (
      <CollectionPreview key={ id } { ...otherProperties } />
    ))}
  </CollectionsOverviewContainer>
)}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(collectionsOverview);