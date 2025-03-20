import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Home/Layout"
import Home from "./pages/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/"element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;