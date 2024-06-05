import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import RecipeListing from "./components/Recipes/RecipeListings";
import RecipeDetail from "./components/Recipes/RecipeDetail";
import Auth from "./components/Auth/Auth";

const Allroutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipeListing />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Allroutes;
