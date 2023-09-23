import React from "react";
import { Routes, Route } from "react-router-dom";
import IngredientMain from "./context/routes-manager/IngredientMain";
import RecipeMain from "./context/routes-manager/RecipeMain";
import Home from "./pages/main/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients/*" element={<IngredientMain />} />
      <Route path="/recipes/*" element={<RecipeMain />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
