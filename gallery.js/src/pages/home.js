import React from "react";
import styled from "styled-components";

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

function Home() {
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

    </div>
  );
}

export default Home;
