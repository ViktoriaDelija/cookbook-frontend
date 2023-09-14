import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Ingredients from "./Ingredients";
import Home from "./Home";
import IngredientDetails from "./IngredientDetails";
import NewIngredient from "./NewIngredient";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const API_URL = "http://localhost:8080/api/ingredients";
  const [ingredients, setIngredients] = useState([]);

  const [newIngredient, setNewIngredient] = useState({
    name: "",
    description: "",
    ingType: "",
    price: "",
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URL);
        setIngredients(response.data);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.stack);
      }
    };
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + "/new", newIngredient);
      const allIngredients = [...ingredients, response.data];
      setIngredients(allIngredients);
      navigate("/ingredients");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/ingredients"
        element={
          <Ingredients
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        }
      />
      <Route path="/ingredients/:ingId" element={<IngredientDetails />} />
      <Route
        path="/ingredients/new"
        element={
          <NewIngredient
            newIngredient={newIngredient}
            setNewIngredient={setNewIngredient}
            handleSubmit={handleSubmit}
          />
        }
      />
    </Routes>
  );
}

export default App;
