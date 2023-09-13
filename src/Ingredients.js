import React, { useEffect } from "react";
import IngredientHeader from "./IngredientHeader";
import IngredientContent from "./IngredientContent";
import "./index.css";
import { useState } from "react";
import axios from "axios";

function Ingredients() {
  const API_URL = "http://localhost:8080/api/ingredients";
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URL);
        setIngredients(response.data);
      } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.stack);
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="Ingredients">
      <IngredientHeader />
      <IngredientContent
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    </div>
  );
}

export default Ingredients;
