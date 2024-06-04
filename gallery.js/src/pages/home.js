import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Row from "photo-gallery.js";

const PrimaryButton = styled.button`
  align-items: center;
  background-color: #71e7f8;
  border-radius: 30px;
  border: none;
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  overflow: hidden;
  padding: 20px 25px;
  position: relative;

  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;

  cursor: pointer;
`;

const ButtonGroup = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 6px;
  position: relative;
`;

const Paragraph = styled.p`
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  margin: 0.5em 0;
  width: 65%;
`;

const LibraryName = styled.h1`
  color: #000000;
  font-family: "MG-Bold", Helvetica;
  font-size: 310px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 300px;
  white-space: nowrap;
  margin: 10px 0 0 0;
`;

const HeroText = styled.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  position: relative;
`;

const HeroSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  margin-top: 5vh;
`;

const RowContainer = styled.div`
  width: 100%;
`;

function Home() {
  const rowRef = useRef(null);

  //   function MakeRow() {
  useEffect(() => {
    const row = new Row(7, "30vh");

    row.addBackgroundImg(
      0,
      "https://images.unsplash.com/photo-1517315403381-a12569a9da85?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    row.addBackgroundImg(
      1,
      "https://images.unsplash.com/photo-1517314815091-85f25384be22?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    row.addHoverAnimation("height");
    row.changeAligment("bottom");
    row.changeBorderRadius(0);
    row.changeXMargins(4);
    //   return row;

    if (rowRef.current) {
      rowRef.current.innerHTML = ""; // Clear previous content
      rowRef.current.appendChild(row.row);
    }

    return () => {
      if (rowRef.current && row.row) {
        rowRef.current.removeChild(row.row);
      }
    };
  }, []);
  //   }
  return (
    <div>
      <HeroSection>
        <HeroText>
          <LibraryName>Gallery.js</LibraryName>
          <Paragraph>
            Your go to library to make seamless photo galleries on your next web
            app
          </Paragraph>
        </HeroText>
        <ButtonGroup>
          <PrimaryButton>Get Started</PrimaryButton>
          <PrimaryButton>Documentation</PrimaryButton>
          <PrimaryButton>Examples</PrimaryButton>
        </ButtonGroup>
      </HeroSection>

      <RowContainer ref={rowRef} />
    </div>
  );
}

export default Home;
