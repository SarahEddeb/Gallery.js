import React from "react";
import styled from "styled-components";
import ExternalLinkIcons from "./ExternalLinkIcons";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: flex-start;
  width: 100%;
  margin-bottom: 100px;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CopyText = styled.p`
  font-family: "Roboto", Helvetica;
  font-size: 12px;
  white-space: pre-wrap;
`;

const SmallLibraryName = styled.p`
  display: inline;
  font-family: "Roboto Mono", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterLeft>
        <SmallLibraryName>photo-gallery.js</SmallLibraryName>
        <CopyText>v2.3.2 | MIT License | 2024 | © Sarah Eddeb</CopyText>
      </FooterLeft>
      <ExternalLinkIcons />
    </FooterDiv>
  );
};

export default Footer;
