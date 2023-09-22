import React from "react";
import RecipeList from "./RecipeList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RecipeContent = ({ recipes, setRecipes }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/recipes/new");
  };

  return (
    <main>
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
      <button onClick={handleButtonClick}>Add new recipe</button>
    </main>
  );
};

export default RecipeContent;
