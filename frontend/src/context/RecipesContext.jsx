import React, { createContext, useState, useEffect } from "react";
import { fetchAllRecipes } from "../API/api";

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllRecipes = async () => {
      setLoading(true);
      const allRecipes = await fetchAllRecipes();
      setRecipes(allRecipes);
      setLoading(false);
    };

    getAllRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes, loading }}>
      {children}
    </RecipesContext.Provider>
  );
};
