import React, { useEffect } from "react";
import IngredientHeader from "./IngredientHeader";
import IngredientContent from "./IngredientContent";
import "./index.css";
import { useState } from "react";
import axios from "axios";

function Ingredients({ ingredients, setIngredients }) {
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
