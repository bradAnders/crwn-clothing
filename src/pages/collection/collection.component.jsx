import React, { useContext } from "react";

import CollectionsContext from "../../contexts/collections/collections.contexts";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

// CollectionPage is a Route in ShopPage.js, so we get match automatically
const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const { title, items } = collections[match.params.collectionId];
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
};

export default CollectionPage;
