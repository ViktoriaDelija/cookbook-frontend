import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const RecipeDetails = ({ recipe, setRecipe }) => {
  const { recId } = useParams();
  const API_URL = "http://localhost:8080/api/recipes";

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(API_URL + `/${recId}`);
        setRecipe(response.data);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    };
    fetchRecipe();
  }, [recId]);

  return (
    <main>
      <article>
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>
        <p>{recipe.instructions}</p>
      </article>
    </main>
  );
};
export default RecipeDetails;
