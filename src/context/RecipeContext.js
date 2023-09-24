import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataContext from "./DataContext";
import jwtDecode from "jwt-decode";

const RecipeContext = createContext({});
export const RecipeProvider = ({ children }) => {
  const { navigate, token } = useContext(DataContext);
  const API_URL_RECIPE = "http://localhost:8080/api/recipes";
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    instructions: "",
    authorEmail: "",
    ingredientIds: [],
  });
  const [editRecipe, setEditRecipe] = useState({
    name: "",
    description: "",
    instructions: "",
  });
  const customHeaders = { Authorization: "Bearer " + token };

  useEffect(() => {
    if (token) {
      var decoded = jwtDecode(token);
      setNewRecipe({ ...newRecipe, authorEmail: decoded.sub });
      console.log(newRecipe.authorEmail);
    }
  }, []);

  const handleSubmitRecipe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL_RECIPE + `/new`, newRecipe, {
        headers: customHeaders,
      });
      const allRecipes = [...recipes, response.data];
      setRecipes(allRecipes);
      navigate("/recipes");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  const handleDeleteRecipe = async (recId) => {
    try {
      await axios.delete(API_URL_RECIPE + `/delete/${recId}`, {
        headers: customHeaders,
      });
      const updatedRecipes = recipes.filter((recipe) => recipe.id !== recId);
      setRecipes(updatedRecipes);
      navigate("/recipes");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  const handleEditRecipe = async (recId) => {
    try {
      const response = await axios.put(
        API_URL_RECIPE + `/edit/${recId}`,
        editRecipe,
        { headers: customHeaders }
      );
      setRecipes(
        recipes.map((recipe) => (recipe.id === recId ? response.data : recipe))
      );
      navigate(`/recipes/${recId}`);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.stack);
    }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(API_URL_RECIPE);
        setRecipes(response.data);
      } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.stack);
      }
    };
    fetchRecipes();
  }, []);

  const handleCheck = (checkedId) => {
    const isIngredientInList = newRecipe.ingredientIds.includes(checkedId);

    if (!isIngredientInList) {
      setNewRecipe({
        ...newRecipe,
        ingredientIds: [...newRecipe.ingredientIds, checkedId],
      });
    } else {
      const updatedIngredients = newRecipe.ingredientIds.filter(
        (id) => id !== checkedId
      );
      setNewRecipe({
        ...newRecipe,
        ingredientIds: updatedIngredients,
      });
    }
  };
  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        recipe,
        setRecipe,
        newRecipe,
        setNewRecipe,
        editRecipe,
        setEditRecipe,
        handleSubmitRecipe,
        handleDeleteRecipe,
        handleEditRecipe,
        handleCheck,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
