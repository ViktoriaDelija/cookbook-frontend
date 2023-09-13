import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <h1>Welcome!</h1>
      <Link to="/ingredients">Ingredients</Link>
    </main>
  );
};

export default Home;
