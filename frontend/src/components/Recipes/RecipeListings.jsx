import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesContext } from "../../context/RecipesContext";
import {
  fetchMealCategories,
  fetchMealsByCategory,
  fetchAllRecipes,
  fetchMealAreas,
  fetchMealsByArea,
  fetchMealsBySearch,
} from "../../API/api";
import Navbar from "../Navbar";
import "./styles.scss";

const RecipeListing = () => {
  const { recipes, setRecipes, loading } = useContext(RecipesContext);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryLoading, setCategoryLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getCategoriesAndAreas = async () => {
      try {
        const categoriesData = await fetchMealCategories();
        setCategories(categoriesData);

        const areasData = await fetchMealAreas();
        setAreas(areasData);
      } catch (error) {
        console.error("Error fetching categories and areas:", error);
      }
    };

    getCategoriesAndAreas();
  }, []);

  const handleCategoryChange = async (event) => {
    const category = event.target.value;
    setCategoryLoading(true);

    if (category === "All") {
      handleAllClick();
    } else {
      try {
        const meals = await fetchMealsByCategory(category);
        setRecipes(meals);
      } catch (error) {
        console.error(`Error fetching meals for category ${category}:`, error);
      }
      setCategoryLoading(false);
    }
  };

  const handleAreaChange = async (event) => {
    const area = event.target.value;
    setCategoryLoading(true);

    if (area === "All") {
      handleAllClick();
    } else {
      try {
        const meals = await fetchMealsByArea(area);
        setRecipes(meals);
      } catch (error) {
        console.error(`Error fetching meals for area ${area}:`, error);
      }
      setCategoryLoading(false);
    }
  };

  const handleAllClick = async () => {
    try {
      const allRecipes = await fetchAllRecipes();
      setRecipes(allRecipes);
    } catch (error) {
      console.error("Error fetching all recipes:", error);
    }
    setCategoryLoading(false);
  };

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setCategoryLoading(true);

    try {
      const searchResults = await fetchMealsBySearch(searchTerm);
      setRecipes(searchResults);
    } catch (error) {
      console.error(
        `Error fetching meals for search term "${searchTerm}":`,
        error
      );
    }

    setCategoryLoading(false);
  };

  return (
    <div className="pd_recipe_listing">
      <Navbar />
      {loading && "Loading ..."}
      <h2>Explore different recipes</h2>

      <div className="filter_wrapper">
        <select onChange={handleCategoryChange} defaultValue="All">
          <option value="All">All Categories</option>
          {categories.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>

        <select onChange={handleAreaChange} defaultValue="All">
          <option value="All">All Areas</option>
          {areas.map((area) => (
            <option key={area.strArea} value={area.strArea}>
              {area.strArea}
            </option>
          ))}
        </select>

        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a recipe..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="filter_wrapper">
        {categoryLoading && "Loading meals..."}
      </div>

      <div className="recipe_wrapper">
        {recipes.map((item) => (
          <div
            className="card"
            key={item.idMeal}
            onClick={() => handleCardClick(item.idMeal)}
          >
            <div className="upper">
              <img src={item.strMealThumb} alt={item.strMeal} />
            </div>
            <div className="lower">
              <p className="name">{item.strMeal}</p>
              {/* Assuming item.description exists; if not, remove this line */}
              <p className="desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeListing;
