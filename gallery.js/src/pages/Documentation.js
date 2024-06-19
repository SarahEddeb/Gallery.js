import React from "react";
import styled from "styled-components";
import "../index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 60%;
  margin: 0 20%;
`;

const H1 = styled.h1`
  color: black;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 500;
`;

const H2 = styled.h2`
  color: black;
  font-family: "Roboto", Helvetica;
  font-size: 30px;
  font-weight: 500;
`;

const Body = styled.span`
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`;

const SectionLabel = styled.p`
  font-family: "Roboto Mono", Helvetica;

  font-size: 16px;
  font-weight: 500;

  color: #cd292a;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;

  gap: 13px;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 60px;

  width: 50%;
  margin: 100px 25% 200px 25%;
`;

const SmallLibraryName = styled.p`
  display: inline;
  font-family: "Roboto Mono", Helvetica;
  font-size: 20px;
  font-style: italic;
  font-weight: 500;
`;

const CodeSnippet = styled.code`
  width: 95%;
  padding: 20px 25px;
  border-radius: 20px;

  background-color: black;
  color: white;
  font-family: "Roboto Mono", Helvetica;
  font-size: 16px;
  white-space: pre-wrap;
`;

const SubSections = styled.div`
  // background-color: #dcf3f7;

  display: flex;
  flex-direction: column;
  gap: 12px;

  position: fixed;

  z-index: 100;
  top: 40px;
  left: 30px;
`;

const TableHeaders = styled.span`
  width: 128px;
  font-family: "Roboto", Helvetica;
  font-size: 15px;
  font-weight: 500;
`;

const TableAttributes = styled.span`
  width: 128px;
  font-family: "Roboto Mono", Helvetica;
  font-size: 15px;
  font-weight: 500;
  color: #cd292a;
`;

const TableText = styled.span`
  width: 128px;
  font-family: "Roboto Mono", Helvetica;
  font-size: 15px;
  font-weight: 400;
  color: #000000;
`;

const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-color: #1d636e;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const Table = styled.div`
  width: 100%;
`;

const ContentsTag = styled.span`
  font-family: "Roboto Mono", Helvetica;

  font-size: 16px;
  font-weight: 500;

  color: #cd292a;
  margin-top: 5px;

  cursor: pointer;
`;

const ContentsSubTag = styled.span`
  font-family: "Roboto Mono", Helvetica;

  font-size: 14px;
  font-weight: 500;

  color: #cd292a;
  cursor: pointer;
`;

const CTAIcon = styled.i`
  color: #cd292a;
  padding-top: 1px;
  margin-right: 5px;
  font-size: 14px;
`;

const Documentation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 50;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SubSections>
        <ContentsTag onClick={() => scrollToSection("getting-started")}>Getting Started</ContentsTag>
        <ContentsSubTag onClick={() => scrollToSection("npm")}>
          <CTAIcon className="bx bx-right-arrow-alt" />
          Installing using npm
        </ContentsSubTag>
        <ContentsSubTag onClick={() => scrollToSection("download")}>
          {" "}
          <CTAIcon className="bx bx-right-arrow-alt" />
          Download
        </ContentsSubTag>
        <ContentsTag onClick={() => scrollToSection("importing")}>Importing</ContentsTag>
        <ContentsSubTag onClick={() => scrollToSection("html")}>
          {" "}
          <CTAIcon className="bx bx-right-arrow-alt" />
          HTML
        </ContentsSubTag>
        <ContentsSubTag onClick={() => scrollToSection("javascript")}>
          {" "}
          <CTAIcon className="bx bx-right-arrow-alt" />
          Javascript
        </ContentsSubTag>
        <ContentsSubTag onClick={() => scrollToSection("react")}>
          {" "}
          <CTAIcon className="bx bx-right-arrow-alt" />
          React
        </ContentsSubTag>
        <ContentsTag onClick={() => scrollToSection("row")}>Row</ContentsTag>
        <ContentsSubTag onClick={() => scrollToSection("basic-row")}>
          {" "}
          <CTAIcon className="bx bx-right-arrow-alt" />
          Basic Row
        </ContentsSubTag>
        <ContentsSubTag onClick={() => scrollToSection("advanced-features")}>
          {" "}
          <CTAIcon className="bx bx-right-arrow-alt" />
          Advanced Features
        </ContentsSubTag>
        <ContentsSubTag onClick={() => scrollToSection("row-props")}>
          {" "}
          <CTAIcon className="bx bx-right-arrow-alt" />
          Row Props
        </ContentsSubTag>
      </SubSections>
      <Container>
        <Navbar />
      </Container>

      <ContentDiv>
        <Section id="getting-started">
          <H1>Getting Started</H1>
          <Body>
            This guide will walk you through installing and using the{" "}
            <SmallLibraryName>gallery.js</SmallLibraryName>
            library in different environments, including an HTML file, a vanilla
            JavaScript project, and a React project.
          </Body>
        </Section>

        <Section id="npm">
          <SectionLabel>/Installation</SectionLabel>
          <H2>Installing using npm</H2>
          <Body>
            To install the <SmallLibraryName>gallery.js</SmallLibraryName>{" "}
            library using npm, run the following command in your terminal:
          </Body>

          <CodeSnippet>npm install photo-gallery.js</CodeSnippet>
        </Section>

        <Section id="download">
          <H2>Download</H2>
          <Body>
            If you prefer to use the library directly without npm, you can
            download the library files from the GitHub repository. Include the
            JavaScript file in your project.
          </Body>
        </Section>

        <Section id="importing">
          <SectionLabel>/Importing</SectionLabel>

          <H2 id="html">Importing in an HTML File</H2>
          <Body>
            To use <SmallLibraryName>gallery.js</SmallLibraryName> in an HTML
            file, you need to include the library script. If you have downloaded
            the file, include it in your HTML file as follows:
          </Body>

          <CodeSnippet>
            {`<!DOCTYPE html>

<html lang="en"><head>     
    <meta charset="UTF-8">     
    <meta name="viewport" content="width=device-width, initial-scale=1.0">             
    <title>Gallery Example</title>
</head>
<body>     
      <div id="gallery"></div>     
      <script src="path/to/gallery.js"></script>     
      <script>         
            // Example usage         
          const row = new Row({            
            columns: 3,             
            height: "300px"         
          });                     

          document.getElementById('gallery').appendChild(row.element);     
      </script>
</body>
</html>`}
          </CodeSnippet>
        </Section>

        <Section id="javascript">
          <H2>Importing in Vanilla JavaScript</H2>
          <Body>
            In a vanilla JavaScript project, you can import the library after
            installing it with npm or by directly including the file. Here is an
            example:
          </Body>
          <CodeSnippet>
            {`import Row from 'photo-gallery.js'; 

document.addEventListener('DOMContentLoaded', () => {     
  const row = new Row({         
  columns: 3,         
  height: "300px"
  });   

  document.getElementById('gallery').appendChild(row.element); 
});`}
          </CodeSnippet>
        </Section>

        <Section id="react">
          <H2>Importing in a React Project</H2>
          <Body>
            In a React project, you can import the library after installing it
            with npm or by directly including the file. UseEffect is used to
            create the row. Here is an example:
          </Body>

          <CodeSnippet>
            {`import React, { useEffect } from 'react';
import Row from 'photo-gallery.js';

const GalleryComponent = () => {
    useEffect(() => {
        const row = new Row({
            columns: 3,
            height: "300px"
        });
        document.getElementById('gallery').appendChild(row.element);
    }, []);

    return <div id="gallery"></div>;
};

export default GalleryComponent;`}
          </CodeSnippet>
        </Section>

        <Section id="row">
          <H1>Row</H1>
          <Body>
            This guide will walk you through installing and using the gallery.js
            library in different environments, including an HTML file, a vanilla
            JavaScript project, and a React project.
          </Body>
        </Section>

        <Section id="basic-row">
          <H2>Basic Row</H2>
          <Body>
            To install the gallery.js library using npm, run the following
            command in your terminal:
          </Body>
          <CodeSnippet>
            {`import Row from 'photo-gallery.js'; 

const row = new Row({         
    columns: 3,         
    height: "300px"
}); `}
          </CodeSnippet>
        </Section>

        <Section id="advanced-features">
          <H2>Advanced Features</H2>
          <Body>
            To install the gallery.js library using npm, run the following
            command in your terminal:
          </Body>
          <CodeSnippet>
            {`import Row from 'photo-gallery.js'; 

const row = new Row({         
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
});  `}
          </CodeSnippet>
        </Section>

        <Section id="row-props">
          <H2>Row Props</H2>
          <Body>
            To install the gallery.js library using npm, run the following
            command in your terminal:
          </Body>
        </Section>

        <Table>
          <TableRow>
            <TableHeaders>Name</TableHeaders>
            <TableHeaders>Type</TableHeaders>
            <TableHeaders>Default</TableHeaders>
            <TableHeaders>Examples/Accepted Types</TableHeaders>
            <TableHeaders>Description </TableHeaders>
          </TableRow>

          <TableRow>
            <TableAttributes>columns</TableAttributes>
            <TableText>number</TableText>
            <TableText>-</TableText>
            <TableText>1 | 2 | 5</TableText>
            <TableText>The number of columns in the row</TableText>
          </TableRow>
          <TableRow>
            <TableAttributes>height</TableAttributes>
            <TableText>string</TableText>
            <TableText>-</TableText>
            <TableText>‘200px’ | ‘100%’ | ‘10vh’</TableText>
            <TableText>The height of each item in the row</TableText>
          </TableRow>
          <TableRow>
            <TableAttributes>gap</TableAttributes>
            <TableText>string</TableText>
            <TableText>‘5px’</TableText>
            <TableText>‘10px’ | ‘5%’</TableText>
            <TableText>The gap between items</TableText>
          </TableRow>
          <TableRow>
            <TableAttributes>padding</TableAttributes>
            <TableText>{`{value: string, direction: string}`}</TableText>
            <TableText>-</TableText>
            <TableText>{`{value: ‘5px’, direction: ‘left’}
| {value: ‘10%’, direction: ‘right’}
| {value: ‘10%’, direction: ‘x’}
| {value: ‘10%’, direction: ‘y’}
| {value: ‘10%’, direction: ‘top’}
| {value: ‘10%’, direction: ‘bottom’}`}</TableText>
            <TableText>
              An object specifying the padding value and direction
            </TableText>
          </TableRow>
          <TableRow>
            <TableAttributes>alignment</TableAttributes>
            <TableText>string</TableText>
            <TableText>-</TableText>
            <TableText>‘top’ | ‘bottom’ | ‘middle’ | ‘center’</TableText>
            <TableText>The vertical alignment of items in the row</TableText>
          </TableRow>
          <TableRow>
            <TableAttributes>fixedHeight</TableAttributes>
            <TableText>boolean</TableText>
            <TableText>false</TableText>
            <TableText>true | false</TableText>
            <TableText>A boolean to set a fixed height for the row</TableText>
          </TableRow>
          <TableRow>
            <TableAttributes>images</TableAttributes>
            <TableText>{`string[]`}</TableText>
            <TableText>-</TableText>
            <TableText>{`[
‘url-image1.png’,
‘url-image2.png’,
‘url-image3.png’,
]`}</TableText>
            <TableText>An array of image URLs to be added to the row</TableText>
          </TableRow>
          <TableRow>
            <TableAttributes>hoverAnimation</TableAttributes>
            <TableText>string</TableText>
            <TableText>-</TableText>
            <TableText>‘width’ | ‘height’ | ‘combo’ | ‘round’</TableText>
            <TableText>The type of hover animation</TableText>
          </TableRow>
        </Table>
      </ContentDiv>

      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default Documentation;
