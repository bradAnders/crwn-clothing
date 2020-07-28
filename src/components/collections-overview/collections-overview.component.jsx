import React, { useContext } from "react";

import CollectionsContext from "../../contexts/collections/collections.context";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = () => {
  const { collections } = useContext(CollectionsContext);
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherProperties }) => (
        <CollectionPreview key={id} {...otherProperties} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
