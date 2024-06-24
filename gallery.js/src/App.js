import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Documentation from "./pages/Documentation.js";

function App() {
  return (
    <BrowserRouter basename="/Gallery.js">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="documentation" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
