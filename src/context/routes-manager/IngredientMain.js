import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Ingredients from "../../pages/ingredients/Ingredients";
import IngredientDetails from "../../pages/ingredients/IngredientDetails";
import NewIngredient from "../../pages/ingredients/NewIngredient";
import EditIngredient from "../../pages/ingredients/EditIngredient";

const IngredientMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Ingredients />} />
      <Route path="/:ingId" element={<IngredientDetails />} />
      <Route path="/new" element={<NewIngredient />} />
      <Route path="/edit/:ingId" element={<EditIngredient />} />
    </Routes>
  );
};

export default IngredientMain;
