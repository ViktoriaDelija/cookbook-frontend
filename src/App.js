import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import IngredientMain from "./IngredientMain";
import RecipeMain from "./RecipeMain";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients/*" element={<IngredientMain />} />
      <Route path="/recipes/*" element={<RecipeMain />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
