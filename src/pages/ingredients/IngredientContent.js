import React from "react";
import { useState } from "react";
import IngredientList from "./IngredientList";
import { useNavigate } from "react-router-dom";

const IngredientContent = ({ ingredients, setIngredients }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/ingredients/new");
  };
  return (
    <main>
      <IngredientList
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <button onClick={handleButtonClick}>Add new ingredient</button>
    </main>
  );
};

export default IngredientContent;
