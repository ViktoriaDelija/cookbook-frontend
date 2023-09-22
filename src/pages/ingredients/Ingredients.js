import React from "react";
import IngredientHeader from "./IngredientHeader";
import IngredientContent from "./IngredientContent";
import "../../index.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function Ingredients() {
  const { ingredients, setIngredients } = useContext(DataContext);
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
