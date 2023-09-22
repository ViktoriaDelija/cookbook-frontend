import React from "react";
import { Routes, Route } from "react-router-dom";
import Recipes from "./Recipes";
import RecipeDetails from "./RecipeDetails";
import RecipeNew from "./RecipeNew";
import RecipeEdit from "./RecipeEdit";

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
