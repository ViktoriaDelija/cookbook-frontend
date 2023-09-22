import React from "react";
import RecipeContent from "./RecipeContent";
import RecipeHeader from "./RecipeHeader";
import { useContext } from "react";
import RecipeContext from "../../context/RecipeContext";

const Recipes = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);
  return (
    <div>
      <RecipeHeader />
      <RecipeContent recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
};

export default Recipes;
