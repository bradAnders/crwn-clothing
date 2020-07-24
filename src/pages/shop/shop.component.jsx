import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'

import './shop.styles.scss'


// ShopPage is a Route in App.js, so we get match automatically
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
    {/* collectionId is passed as a parameter to CollectionPage ({ match.params.collectionId })*/}
    <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
  </div>
);

export default ShopPage;