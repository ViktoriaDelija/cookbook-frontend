import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Recipes from "./Recipes";
import { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import RecipeNew from "./RecipeNew";
import RecipeEdit from "./RecipeEdit";

const RecipeMain = ({ ingredients, setIngredients }) => {
  const navigate = useNavigate();
  const API_URL = "http://localhost:8080/api/recipes";
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    instructions: "",
    ingredientIds: [],
  });
  const [editRecipe, setEditRecipe] = useState({
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

  const handleDelete = async (recId) => {
    try {
      await axios.delete(API_URL + `/delete/${recId}`);
      const updatedRecipes = recipes.filter((recipe) => recipe.id !== recId);
      setRecipes(updatedRecipes);
      navigate("/recipes");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  const handleEdit = async (recId) => {
    try {
      const response = await axios.put(API_URL + `/edit/${recId}`, editRecipe);
      setRecipes(
        recipes.map((recipe) => (recipe.id === recId ? response.data : recipe))
      );
      navigate(`/recipes/${recId}`);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  const handleCheck = (checkedId) => {
    const isIngredientInList = newRecipe.ingredientIds.includes(checkedId);

    if (!isIngredientInList) {
      setNewRecipe({
        ...newRecipe,
        ingredientIds: [...newRecipe.ingredientIds, checkedId],
      });
    }
    console.log(newRecipe.ingredientIds);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Recipes recipes={recipes} setRecipes={setRecipes} />}
      />
      <Route
        path="/:recId"
        element={
          <RecipeDetails
            recipe={recipe}
            setRecipe={setRecipe}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        }
      />
      <Route
        path="/new"
        element={
          <RecipeNew
            newRecipe={newRecipe}
            setNewRecipe={setNewRecipe}
            handleSubmit={handleSubmit}
            ingredients={ingredients}
            handleCheck={handleCheck}
          />
        }
      />
      <Route
        path="/edit/:recId"
        element={
          <RecipeEdit
            recipes={recipes}
            editRecipe={editRecipe}
            setEditRecipe={setEditRecipe}
            handleEdit={handleEdit}
          />
        }
      />
    </Routes>
  );
};

export default RecipeMain;
