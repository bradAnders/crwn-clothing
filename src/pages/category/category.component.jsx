import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './category.styles.scss';

// CategoryPage is a Route in ShopPage.js, so we get match automatically
const CategoryPage = ({ match: { params: { categoryId }} }) => (
  <div className="category">
    <h2>Category Page { categoryId }</h2>
    {/* <CollectionItem */}
  </div>
);
 
export default CategoryPage;