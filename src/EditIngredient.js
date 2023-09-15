import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditIngredient = ({
  ingredients,
  editIngredient,
  setEditIngredient,
  handleEdit,
}) => {
  const { ingId } = useParams();
  console.log(ingId);
  const ingredient = ingredients.find(
    (ingredient) => ingredient.id.toString() === ingId
  );

  useEffect(() => {
    if (ingredient) {
      setEditIngredient({
        name: ingredient.name,
        description: ingredient.description,
        ingType: ingredient.ingType,
        price: ingredient.price,
      });
      console.log("OPIS: " + ingredient.description);
    }
  }, [ingredient, setEditIngredient]);
  return (
    <main>
      <h2>Edit Ingredient</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={editIngredient.name}
          onChange={(e) =>
            setEditIngredient({ ...editIngredient, name: e.target.value })
          }
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={editIngredient.description}
          onChange={(e) =>
            setEditIngredient({
              ...editIngredient,
              description: e.target.value,
            })
          }
        />
        <label>Type</label>
        <input
          type="text"
          name="ingType"
          value={editIngredient.ingType}
          onChange={(e) =>
            setEditIngredient({
              ...editIngredient,
              ingType: e.target.value,
            })
          }
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={editIngredient.price}
          onChange={(e) =>
            setEditIngredient({
              ...editIngredient,
              price: e.target.value,
            })
          }
        />
      </form>
      <button type="submit" onClick={() => handleEdit(ingredient.id)}>
        Edit
      </button>
    </main>
  );
};

export default EditIngredient;
