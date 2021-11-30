import React from "react";
import {Wrapper, WrapperTitle, WrapperFullName, WrapperLink} from "./style";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <Wrapper>
      <WrapperTitle>{name}</WrapperTitle>
      <WrapperFullName>full name:</WrapperFullName>
      <WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </WrapperLink>
    </Wrapper>
  );
};

export default RepositoryItem;
