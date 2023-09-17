import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Recipes from "./Recipes";
import { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import RecipeNew from "./RecipeNew";

const RecipeMain = () => {
  const navigate = useNavigate();
  const API_URL = "http://localhost:8080/api/recipes";
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    instructions: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + `/new`, newRecipe);
      const allRecipes = [...recipes, response.data];
      setRecipes(allRecipes);
      navigate("/recipes");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Recipes recipes={recipes} setRecipes={setRecipes} />}
      />
      <Route
        path="/:recId"
        element={<RecipeDetails recipe={recipe} setRecipe={setRecipe} />}
      />
      <Route
        path="/new"
        element={
          <RecipeNew
            newRecipe={newRecipe}
            setNewRecipe={setNewRecipe}
            handleSubmit={handleSubmit}
          />
        }
      />
    </Routes>
  );
};

export default RecipeMain;
