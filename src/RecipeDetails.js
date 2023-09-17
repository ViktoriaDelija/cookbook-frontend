import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeDetails = ({ recipe, setRecipe, handleDelete, handleEdit }) => {
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
        <button onClick={() => handleDelete(recipe.id)}>Delete recipe</button>
        <Link to={`/recipes/edit/${recId}`}>
          <button>Edit ingredient</button>
        </Link>
      </article>
    </main>
  );
};
export default RecipeDetails;
