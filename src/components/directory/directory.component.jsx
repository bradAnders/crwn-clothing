import React, { useContext } from "react";

import DirectoryContext from "../../contexts/directory/directory.context";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => {
  const { sections } = useContext(DirectoryContext);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
