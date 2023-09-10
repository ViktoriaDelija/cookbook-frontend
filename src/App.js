import React, { useEffect } from "react";
import IngredientHeader from "./IngredientHeader";
import IngredientContent from "./IngredientContent";
import "./index.css";
import { useState } from "react";

function App() {
  const API_URL = "http://localhost:8080/api/ingredients";
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const ingredientsList = await response.json();
        console.log("Ingredients: " + ingredientsList);
        setIngredients(ingredientsList);
      } catch (err) {
        console.log(err.stack);
      }
    };
    (async () => await fetchItems())();
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

export default App;
