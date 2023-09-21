import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import IngredientMain from "./IngredientMain";
import RecipeMain from "./RecipeMain";
import { useState, useEffect } from "react";
import Login from "./Login";
import TokenContext from "./TokenContext";

function App() {
  const [ingredients, setIngredients] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home ingredients={ingredients} setIngredients={setIngredients} />
        }
      />
      <Route
        path="/ingredients/*"
        element={
          <IngredientMain
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        }
      />
      <Route
        path="/recipes/*"
        element={
          <RecipeMain
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
