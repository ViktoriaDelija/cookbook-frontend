import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const IngredientDetails = () => {
  const { ingId } = useParams();
  const API_URL = "http://localhost:8080/api/ingredients";
  const { ingredient, setIngredient, handleDeleteIngredient } =
    useContext(DataContext);
  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const response = await axios.get(API_URL + `/${ingId}`);
        setIngredient(response.data);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
      }
    };
    fetchIngredient();
  }, [ingId]);
  return (
    <main>
      <article>
        <h2>{ingredient.name}</h2>
        <p>{ingredient.description}</p>
        <p>{ingredient.ingType}</p>
        <p>{ingredient.price} €</p>
        <button onClick={() => handleDeleteIngredient(ingredient.id)}>
          Delete ingredient
        </button>
        <Link to={`/ingredients/edit/${ingredient.id}`}>
          <button>Edit ingredient</button>
        </Link>
      </article>
    </main>
  );
};

export default IngredientDetails;
