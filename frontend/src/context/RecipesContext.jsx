// src/RecipesContext.js
// import React, { createContext, useState, useEffect } from "react";
// import { fetchAllRecipes } from "../API/api";

// export const RecipesContext = createContext();

// export const RecipesProvider = ({ children }) => {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getRecipes = async () => {
//       try {
//         const allRecipes = await fetchAllRecipes();
//         setRecipes(allRecipes);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch recipes:", error);
//         setLoading(false);
//       }
//     };

//     getRecipes();
//   }, []);
//   // console.log("meals", recipes);

//   return (
//     <RecipesContext.Provider value={{ recipes, loading }}>
//       {children}
//     </RecipesContext.Provider>
//   );
// };

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
