import React from "react";
import { useState } from "react";
import IngredientList from "./IngredientList";

const IngredientContent = ({ ingredients, setIngredients }) => {
  return (
    <main>
      <IngredientList
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    </main>
  );
};

export default IngredientContent;
