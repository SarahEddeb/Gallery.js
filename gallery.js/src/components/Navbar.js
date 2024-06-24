import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../styles/breakpoints";

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

  @media (${breakpoints.md}) {
    font-size: 16px;
  }
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

  @media (${breakpoints.md}) {
    font-size: 13px;
  }
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

  @media (${breakpoints.md}) {
    padding: 9px 12px;
    gap: 5px;
  }
`;

const NavButtonBgText = styled.p`
  color: #f0fbfd;
  font-family: "Roboto", Helvetica;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;

  @media (${breakpoints.md}) {
    font-size: 13px;
  }
`;

const RightNav = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 25px;
  position: relative;

  @media (${breakpoints.md}) {
    gap: 15px;
  }
`;

const Navbar = () => {
  return (
    <NavbarDiv>
      <Link to="/" style={{ textDecoration: "none" }}>
        <LibraryName>photo-gallery.js</LibraryName>
      </Link>
      <RightNav>
        <Link to="/documentation">
          <NavButton>
            <NavButtonIcon className="bx bx-code-curly" />
            <NavButtonText>Documentation</NavButtonText>
          </NavButton>
        </Link>

        <Link to="/examples">
          <NavButton>
            <NavButtonIcon className="bx bx-grid" />
            <NavButtonText>Examples</NavButtonText>
          </NavButton>
        </Link>

        <a
          href="https://github.com/SarahEddeb/Gallery.js"
          rel="noopener noreferrer"
          target="_blank"
        >
          <NavButtonBg>
            <NavButtonBgText>Download</NavButtonBgText>
          </NavButtonBg>
        </a>
      </RightNav>
    </NavbarDiv>
  );
};

export default Navbar;
