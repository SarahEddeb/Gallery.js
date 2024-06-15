import React from "react";
import styled from "styled-components";

const NavbarDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;

  margin-top: 25px;
`;

const LibraryName = styled.span`
  color: #000000;
  font-family: "Roboto Mono", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 0.4px;
  line-height: 17.6px;

  cursor: pointer;
`;

const NavButton = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 5px;
  position: relative;

  cursor: pointer;
`;

const NavButtonText = styled.p`
  color: #cd292a;
  font-family: "Roboto", Helvetica;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;

const NavButtonIcon = styled.i`
  height: 18px;
  width: 18px;
  color: #cd292a;
  padding-top: 1px;
`;

const NavButtonBg = styled.div`
  align-items: center;
  background-color: #cd292a;
  border-radius: 30px;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  overflow: hidden;
  padding: 11px 18px;

  cursor: pointer;
`;

const NavButtonBgText = styled.p`
  color: #f0fbfd;
  font-family: "Roboto", Helvetica;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;

const RightNav = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 25px;
  position: relative;
`;

const Navbar = () => {
  return (
    <NavbarDiv>
      <LibraryName>gallery.js</LibraryName>
      <RightNav>
        <NavButton>
          <NavButtonIcon className="bx bx-code-curly" />
          <NavButtonText>Documentation</NavButtonText>
        </NavButton>

        <NavButton>
          <NavButtonIcon className="bx bx-grid" />
          <NavButtonText>Examples</NavButtonText>
        </NavButton>

        <NavButtonBg>
          <NavButtonBgText>Download</NavButtonBgText>
        </NavButtonBg>
      </RightNav>
    </NavbarDiv>
  );
};

export default Navbar;
