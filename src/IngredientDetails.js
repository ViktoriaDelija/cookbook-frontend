import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const IngredientDetails = ({ handleDelete, ingredient, setIngredient }) => {
  const API_URL = "http://localhost:8080/api/ingredients";
  const { ingId } = useParams();
  console.log(ingId);

  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const response = await axios.get(API_URL + `/${ingId}`);
        setIngredient(response.data);
        console.log(ingredient.id);
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
        <button onClick={() => handleDelete(ingredient.id)}>
          Delete ingredient
        </button>
      </article>
    </main>
  );
};

export default IngredientDetails;
