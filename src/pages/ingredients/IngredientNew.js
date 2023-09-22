import React from "react";
import { useContext } from "react";
import IngredientContext from "../../context/IngredientContext";

const IngredientNew = () => {
  const { newIngredient, setNewIngredient, handleSubmitIngredient } =
    useContext(IngredientContext);
  return (
    <main>
      <h2>New Ingredient</h2>
      <form onSubmit={handleSubmitIngredient}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newIngredient.name}
          onChange={(e) =>
            setNewIngredient({ ...newIngredient, name: e.target.value })
          }
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={newIngredient.description}
          onChange={(e) =>
            setNewIngredient({ ...newIngredient, description: e.target.value })
          }
        />
        <label>Type</label>
        <input
          type="text"
          name="ingType"
          value={newIngredient.ingType}
          onChange={(e) =>
            setNewIngredient({ ...newIngredient, ingType: e.target.value })
          }
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={newIngredient.price}
          onChange={(e) =>
            setNewIngredient({ ...newIngredient, price: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default IngredientNew;
