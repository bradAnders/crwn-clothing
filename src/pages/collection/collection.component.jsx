import React from "react";

import CollectionsContext from "../../contexts/collections/collections.contexts";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

// CollectionPage is a Route in ShopPage.js, so we get match automatically
const CollectionPage = ({ match }) => {
  return (
    <CollectionsContext.Consumer>
      {(collections) => {
        const collection = collections[match.params.collectionId];
        const { title, items } = collection;
        return (
          <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </CollectionItemsContainer>
          </CollectionPageContainer>
        );
      }}
    </CollectionsContext.Consumer>
  );
};

export default CollectionPage;
