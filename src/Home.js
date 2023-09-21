import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { ingredients, setIngredients } = useContext(DataContext);
  return (
    <main>
      <h1>Welcome!</h1>
      <Link to="/ingredients">Ingredients</Link>
      <br />
      <Link to="/recipes">Recipes</Link>
    </main>
  );
};

export default Home;
