import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Recipes from "./Recipes";
import { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import RecipeNew from "./RecipeNew";
import RecipeEdit from "./RecipeEdit";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const RecipeMain = () => {
  const { ingredients, setIngredients } = useContext(DataContext);

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
