import React from "react";
import RecipeContent from "./RecipeContent";
import RecipeHeader from "./RecipeHeader";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Recipes = () => {
  const { recipes, setRecipes } = useContext(DataContext);
  return (
    <div>
      <RecipeHeader />
      <RecipeContent recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
};

export default Recipes;
