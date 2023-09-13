import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const IngredientDetails = ({ ingredients }) => {
  const API_URL = "http://localhost:8080/api/ingredients";
  const { ingId } = useParams();
  const [ingredient, setIngredient] = useState({});

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
      </article>
    </main>
  );
};

export default IngredientDetails;
