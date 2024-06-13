import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Row from "photo-gallery.js";
import "../index.css";

const Navbar = styled.div`
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

const Container = styled.div`
  width: 60%;
  margin: 0 20%;
`;

const Paragraph = styled.span`
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 400;
  width: 40%;
`;

const SmallLibraryName = styled.p`
  display: inline;
  font-family: "Roboto Mono", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
`;

const IconDiv = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 6px;

  cursor: pointer;
`;

const Icon = styled.i`
  height: 40px;
  width: 40px;
  color: #000000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconName = styled.span`
  font-family: "Roboto Mono", Helvetica;
  font-size: 14px;
  font-weight: 500;
`;

const ExternalLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const BottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%
  gap: auto;
  justify-content: space-between;
`;

const BottomDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GalleryEx = styled.div`
  width: 100%;
  margin: 10% 0;

`

function Home() {
  const [gridLoaded, setGridLoaded] = useState(false);
  const galleryRef = useRef(null)
  useEffect(
    () =>
      function MakeRow() {
        if (!gridLoaded) {
          const rowConfig = {
            columns: 7,
            height: "400px",
            gap: "10px",
            alignment: "bottom",
            hoverAnimation: "width",
            images: [
              "https://images.unsplash.com/photo-1517314597476-e1788060b6cb?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1517821099606-cef63a9bcda6?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1517137855257-7a5080c05dd8?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1517227428644-e7521e622e5a?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1517137660927-27542f89984d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1510234591826-c5a87a6832c9?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "https://images.unsplash.com/photo-1587289517919-b92407d60bbb?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ],
          };

          const myRow = new Row(rowConfig);

          if (galleryRef.current) {
            galleryRef.current.appendChild(myRow.element);
          }

          setGridLoaded(true);

          return () => {
            // Perform any cleanup here if needed
            // For example, remove the row element from the DOM
            if (galleryRef.current) {
              galleryRef.current.removeChild(myRow.element);
            }
          };
        }
      },
    []
  );

  return (
    <Container>
      <Navbar>
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
      </Navbar>

    <GalleryEx ref={galleryRef}>
      {/* Want to add the library example here */}
    </GalleryEx>

      <BottomDiv>
        <BottomDivLeft>
          <Paragraph>
            <SmallLibraryName>gallery.js</SmallLibraryName> is a JavaScript
            library for creating customizable image galleries. This library
            allows you to define rows of images with various configurations.
          </Paragraph>

          <NavButton>
            <NavButtonText>Get Started</NavButtonText>
            <NavButtonIcon className="bx bx-right-arrow-alt" />
          </NavButton>
        </BottomDivLeft>

        <NavButtonIcon></NavButtonIcon>
        <ExternalLinksDiv>
          <IconDiv>
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 23 23"
              >
                <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
              </svg>
            </Icon>
            <IconName>Github</IconName>
          </IconDiv>

          <IconDiv>
            <Icon>
              <svg
                viewBox="0 0 23 23"
                height="40"
                width="40"
                focusable="false"
                role="img"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="StyledIconBase-sc-ea9ulj-0 hRnJPC"
              >
                <title>Npmjs icon</title>
                <path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16zm-3 4H7v10h5V9.5h2.5V17H17V7z"></path>
              </svg>
            </Icon>
            <IconName>npm</IconName>
          </IconDiv>
        </ExternalLinksDiv>
      </BottomDiv>
    </Container>
  );
}

export default Home;
