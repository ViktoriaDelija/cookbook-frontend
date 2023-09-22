import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Ingredients from "../../pages/ingredients/Ingredients";
import IngredientDetails from "../../pages/ingredients/IngredientDetails";
import IngredientNew from "../../pages/ingredients/IngredientNew";
import IngredientEdit from "../../pages/ingredients/IngredientEdit";
import { IngredientProvider } from "../IngredientContext";

const IngredientMain = () => {
  return (
    <IngredientProvider>
      <Routes>
        <Route path="/" element={<Ingredients />} />
        <Route path="/:ingId" element={<IngredientDetails />} />
        <Route path="/new" element={<IngredientNew />} />
        <Route path="/edit/:ingId" element={<IngredientEdit />} />
      </Routes>
    </IngredientProvider>
  );
};

export default IngredientMain;
