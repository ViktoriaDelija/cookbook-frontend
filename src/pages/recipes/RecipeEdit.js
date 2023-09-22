import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import RecipeContext from "../../context/RecipeContext";

const RecipeEdit = () => {
  const { recipes, handleEditRecipe, editRecipe, setEditRecipe } =
    useContext(RecipeContext);
  const { recId } = useParams();
  const recipe = recipes.find((recipe) => recipe.id.toString() === recId);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/recipes/${recId}`
        );
        setEditRecipe(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchRecipe();
  }, [recId]);

  return (
    <main>
      <h2>Edit recipe</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={editRecipe.name}
          onChange={(e) =>
            setEditRecipe({ ...editRecipe, name: e.target.value })
          }
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={editRecipe.description}
          onChange={(e) =>
            setEditRecipe({ ...editRecipe, description: e.target.value })
          }
        />
        <label>Instructions</label>
        <textarea
          type="text"
          name="instructions"
          value={editRecipe.instructions}
          onChange={(e) =>
            setEditRecipe({ ...editRecipe, instructions: e.target.value })
          }
        />
        <button type="submit" onClick={() => handleEditRecipe(recipe.id)}>
          Edit
        </button>
      </form>
    </main>
  );
};

export default RecipeEdit;
