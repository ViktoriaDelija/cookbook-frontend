import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    instructions: "",
    ingredientIds: [],
  });
  const [editRecipe, setEditRecipe] = useState({
    name: "",
    description: "",
    instructions: "",
  });
  const navigate = useNavigate();
  const API_URL_RECIPE = "http://localhost:8080/api/recipes";

  const handleSubmitRecipe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL_RECIPE + `/new`, newRecipe);
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
      await axios.delete(API_URL_RECIPE + `/delete/${recId}`);
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
        editRecipe
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

  return (
    <DataContext.Provider
      value={{
        ingredients,
        setIngredients,
        recipes,
        setRecipes,
        handleSubmitRecipe,
        handleCheck,
        handleDeleteRecipe,
        handleEditRecipe,
        editRecipe,
        setEditRecipe,
        recipe,
        setRecipe,
        newRecipe,
        setNewRecipe,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
