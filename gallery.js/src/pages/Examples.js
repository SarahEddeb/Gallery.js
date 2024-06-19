import React, { useEffect } from 'react';
import styled from 'styled-components';
import Row from 'photo-gallery.js';

const GalleryContainer = styled.div`
  margin: 20px;
`;

const Example1 = () => {
  useEffect(() => {
    const row = new Row({
      columns: 3,
      height: "300px"
    });
    document.getElementById('gallery1').appendChild(row.element);
  }, []);

  return <GalleryContainer id="gallery1"></GalleryContainer>;
};

const Example2 = () => {
  useEffect(() => {
    const row = new Row({
      columns: 4,
      height: "250px",
      padding: { value: '10px', direction: 'x' }
    });
    document.getElementById('gallery2').appendChild(row.element);
  }, []);

  return <GalleryContainer id="gallery2"></GalleryContainer>;
};

const Example3 = () => {
  useEffect(() => {
    const row = new Row({
      columns: 3,
      height: "300px",
      hoverAnimation: "combo"
    });
    document.getElementById('gallery3').appendChild(row.element);
  }, []);

  return <GalleryContainer id="gallery3"></GalleryContainer>;
};

const Example4 = () => {
  useEffect(() => {
    const row = new Row({
      columns: 5,
      height: "200px",
      gap: "15px",
      alignment: "center"
    });
    document.getElementById('gallery4').appendChild(row.element);
  }, []);

  return <GalleryContainer id="gallery4"></GalleryContainer>;
};

const Example5 = () => {
  useEffect(() => {
    const row = new Row({
      columns: 4,
      height: "250px",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    });
    document.getElementById('gallery5').appendChild(row.element);
  }, []);

  return <GalleryContainer id="gallery5"></GalleryContainer>;
};

const Examples = () => {
  return (
    <div>
      <h1>Gallery Examples</h1>
      <Example1 />
      <Example2 />
      <Example3 />
      <Example4 />
      <Example5 />
    </div>
  );
};

export default Examples;
