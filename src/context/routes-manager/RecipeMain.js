import React from "react";
import { Routes, Route } from "react-router-dom";
import Recipes from "../../pages/recipes/Recipes";
import RecipeDetails from "../../pages/recipes/RecipeDetails";
import RecipeNew from "../../pages/recipes/RecipeNew";
import RecipeEdit from "../../pages/recipes/RecipeEdit";

const RecipeMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/:recId" element={<RecipeDetails />} />
      <Route path="/new" element={<RecipeNew />} />
      <Route path="/edit/:recId" element={<RecipeEdit />} />
    </Routes>
  );
};

export default RecipeMain;
