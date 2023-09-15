import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Recipes from "./Recipes";
import { useState } from "react";

const RecipeMain = () => {
  const navigate = useNavigate();
  const API_URL = "http://localhost:8080/api/recipes";
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(API_URL);
        setRecipes(response.data);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.stack);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Recipes recipes={recipes} setRecipes={setRecipes} />}
      />
    </Routes>
  );
};

export default RecipeMain;
