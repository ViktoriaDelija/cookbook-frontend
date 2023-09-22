import React from "react";
import { Routes, Route } from "react-router-dom";
import IngredientMain from "./context/routes-manager/IngredientMain";
import RecipeMain from "./context/routes-manager/RecipeMain";
import Home from "./pages/main/Home";
import Login from "./pages/login/Login";

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
