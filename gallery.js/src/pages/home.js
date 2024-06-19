import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Row from "photo-gallery.js";
import "../index.css";
import Navbar from "../components/Navbar";
import ExternalLinkIcons from "../components/ExternalLinkIcons";


const NavButton = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 5px;
  position: relative;

  cursor: pointer;
`;


const CTAButton = styled.p`
  color: #cd292a;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: normal;
`;


const CTAIcon = styled.i`
  color: #cd292a;
  padding-top: 1px;
  font-size: 24px;

`;

const NavButtonIcon = styled.i`
  height: 18px;
  width: 18px;
  color: #cd292a;
  padding-top: 1px;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Container>
      <Navbar />

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
            <CTAButton>Get Started</CTAButton>
            <CTAIcon className="bx bx-right-arrow-alt" />
          </NavButton>
        </BottomDivLeft>

        <NavButtonIcon></NavButtonIcon>
        <ExternalLinkIcons/>
      </BottomDiv>
    </Container>
  );
}

export default Home;
