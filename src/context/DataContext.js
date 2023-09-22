import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  return (
    <DataContext.Provider
      value={{
        ingredients,
        setIngredients,
        navigate,
        token,
        setToken,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
