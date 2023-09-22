import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({});
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
  const navigate = useNavigate();
  const API_URL_RECIPE = "http://localhost:8080/api/recipes";
  const API_URL_INGREDIENT = "http://localhost:8080/api/ingredients";

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
        newIngredient
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
      await axios.delete(API_URL_INGREDIENT + `/delete/${ingId}`);
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
        editIngredient
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
    </DataContext.Provider>
  );
};

export default DataContext;
