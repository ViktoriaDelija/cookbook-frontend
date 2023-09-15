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
    const fetchIngredient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/ingredients/${ingId}`
        );
        console.log("responseData :" + JSON.stringify(response));
        setEditIngredient(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchIngredient();
  }, [ingId]);

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
