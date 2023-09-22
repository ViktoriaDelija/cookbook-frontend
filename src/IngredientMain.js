import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Ingredients from "./Ingredients";
import IngredientDetails from "./IngredientDetails";
import NewIngredient from "./NewIngredient";
import EditIngredient from "./EditIngredient";

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
