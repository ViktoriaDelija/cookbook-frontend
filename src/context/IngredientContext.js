import { createContext, useContext } from "react";
import DataContext from "./DataContext";
import { useState, useEffect } from "react";
import axios from "axios";

const IngredientContext = createContext({});
export const IngredientProvider = ({ children }) => {
  const API_URL_INGREDIENT = "http://localhost:8080/api/ingredients";
  const { ingredients, setIngredients, navigate, token } =
    useContext(DataContext);

  const [ingredient, setIngredient] = useState({});
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    description: "",
    ingType: "",
    price: "",
  });
  const [editIngredient, setEditIngredient] = useState({
    name: "",
    description: "",
    ingType: "",
    price: "",
  });
  const customHeaders = { Authorization: "Bearer " + token };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_URL_INGREDIENT);
        setIngredients(response.data);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.stack);
      }
    };
    fetchItems();
  }, []);

  const handleSubmitIngredient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        API_URL_INGREDIENT + "/new",
        newIngredient,
        { headers: customHeaders }
      );
      const allIngredients = [...ingredients, response.data];
      setIngredients(allIngredients);
      navigate("/ingredients");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  const handleDeleteIngredient = async (ingId) => {
    try {
      await axios.delete(API_URL_INGREDIENT + `/delete/${ingId}`, {
        headers: customHeaders,
      });
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

  const handleEditIngredient = async (ingId) => {
    try {
      const response = await axios.put(
        API_URL_INGREDIENT + `/edit/${ingId}`,
        editIngredient,
        { headers: customHeaders }
      );
      setIngredients(
        ingredients.map((ingredient) =>
          ingredient.id === ingId ? { ...response.data } : ingredient
        )
      );
      navigate(`/ingredients/${ingId}`);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  return (
    <IngredientContext.Provider
      value={{
        ingredient,
        setIngredient,
        newIngredient,
        setNewIngredient,
        editIngredient,
        setEditIngredient,
        handleDeleteIngredient,
        handleSubmitIngredient,
        handleEditIngredient,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
};

export default IngredientContext;
