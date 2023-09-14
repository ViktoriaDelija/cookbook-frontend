import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Ingredients from "./Ingredients";
import IngredientDetails from "./IngredientDetails";
import NewIngredient from "./NewIngredient";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IngredientMain = () => {
  const navigate = useNavigate();
  const API_URL = "http://localhost:8080/api/ingredients";
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({});
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

  const handleDelete = async (ingId) => {
    try {
      await axios.delete(API_URL + `/delete/${ingId}`);
      const updatedIngredients = ingredients.filter(
        (ingredient) => ingredient.id !== ingId
      );
      setIngredients(updatedIngredients);
      navigate("/ingredients");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Ingredients
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        }
      />
      <Route
        path="/:ingId"
        element={
          <IngredientDetails
            handleDelete={handleDelete}
            ingredient={ingredient}
            setIngredient={setIngredient}
          />
        }
      />
      <Route
        path="/new"
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
};

export default IngredientMain;
