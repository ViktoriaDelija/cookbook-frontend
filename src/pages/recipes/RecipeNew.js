import React from "react";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const RecipeNew = () => {
  const {
    ingredients,
    handleSubmitRecipe,
    newRecipe,
    setNewRecipe,
    handleCheck,
  } = useContext(DataContext);
  return (
    <main>
      <h2>New recipe</h2>
      <form onSubmit={handleSubmitRecipe}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={newRecipe.description}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, description: e.target.value })
          }
        />
        <label>Instructions</label>
        <textarea
          type="text"
          name="instructions"
          value={newRecipe.instructions}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, instructions: e.target.value })
          }
        />
        <ul>
          Add ingredients:
          {ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(ingredient.id)}
                checked={ingredient.checked}
              />
              <label>{ingredient.name}</label>
            </li>
          ))}
        </ul>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default RecipeNew;
