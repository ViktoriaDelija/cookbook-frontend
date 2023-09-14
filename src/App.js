import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import IngredientMain from "./IngredientMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients/*" element={<IngredientMain />} />
    </Routes>
  );
}

export default App;
