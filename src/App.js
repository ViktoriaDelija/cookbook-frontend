import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import IngredientMain from "./IngredientMain";
import RecipeMain from "./RecipeMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients/*" element={<IngredientMain />} />
      <Route path="/recipes/*" element={<RecipeMain />} />
    </Routes>
  );
}

export default App;
