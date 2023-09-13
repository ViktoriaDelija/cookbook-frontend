import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ingredients from "./Ingredients";
import Home from "./Home";
import IngredientDetails from "./IngredientDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/ingredients/:ingId" element={<IngredientDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
