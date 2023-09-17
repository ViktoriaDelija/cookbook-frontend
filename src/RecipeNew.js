import React from "react";

const RecipeNew = ({ newRecipe, setNewRecipe, handleSubmit }) => {
  return (
    <main>
      <h2>New recipe</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default RecipeNew;