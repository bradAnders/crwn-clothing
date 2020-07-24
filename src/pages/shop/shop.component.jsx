import React from 'react';

import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component'

import './shop.styles.scss'


// ShopPage is a Route in App.js, so we get match automatically
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
    {/* categoryId is passed as a parameter to CategoryPage ({ match.params.categoryId })*/}
    <Route path={ `${ match.path }/:categoryId` } component={ CategoryPage } />
  </div>
);

export default ShopPage;