// src/MealList.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesContext } from "../../context/RecipesContext";
import Navbar from "../Navbar";
import "./styles.scss";
const RecipeListing = () => {
  const { recipes, loading } = useContext(RecipesContext);
  console.log("first", recipes);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="pd_recipe_listing">
      <Navbar />
      {loading && "Loading ..."}
      <h2>Explore different recipes</h2>

      <div className="recipe_wrapper">
        {recipes.map((item) => (
          <div
            className="card"
            key={item.idMeal}
            onClick={() => handleCardClick(item.idMeal)}
          >
            <div className="upper">
              <img src={item.strMealThumb} />
            </div>
            <div className="lower">
              <p className="name">{item.strMeal}</p>
              <p className="desc">{item.desccription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeListing;
