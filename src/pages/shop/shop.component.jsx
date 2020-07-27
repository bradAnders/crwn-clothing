import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

// ShopPage is a Route in App.js, so we get match automatically
const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      {/* collectionId is passed as a parameter to CollectionPage ({ match.params.collectionId })*/}
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);