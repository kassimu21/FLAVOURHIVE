import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../../API/api";
import Navbar from "../Navbar";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import "./details.scss";
const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const getRecipe = async () => {
        try {
          const data = await fetchRecipeById(id);
          setRecipe(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      getRecipe();
    },
    [id]
  );

  const getIngredients = recipe => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient} (${measure})`);
      }
    }
    return ingredients;
  };
  console.log("details", recipe);
  return <div>
      <Navbar />
      {recipe && <div className="content">
          <div className="inn-con">
            <div className="col-one">
              <div className="header">
                <h2 className="title">
                  {recipe.strMeal}
                </h2>
                <p>
                  Explore a world of culinary delights with our extensive
                  collection of recipes and ingredients.
                </p>
              </div>
              <div className="image">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              </div>
              <div className="jump-to">
                <h3>Jump To Recipe</h3>
                <p>
                  Our Recipes are equipped with the finest instructions and
                  guide, make sure every instructions are taken keenly to
                  yield optimum results, whether a novice, intermidiate or a
                  pro, your results would be spectacular.
                </p>
              </div>
              <div className="instructions">
                <h3>How To Make</h3>
                <p>
                  {recipe.strInstructions}
                </p>
              </div>
            </div>
            <div className="col-two">
              <div className="main-reci">
                {" "}<div className="recipe-info">
                  <div className="details">
                    <p>
                      <span>Category:</span> {recipe.strCategory}
                    </p>
                    <p>
                      <span>Cook-Time:</span> 20min
                    </p>
                    <p>
                      <span>Servings:</span> 2-3
                    </p>
                    <p>
                      <span>Calories:</span> 22kcal
                    </p>
                  </div>
                </div>
                <div className="social-icons">
                  <div className="inner-cons">
                    <div className="cons">
                      <FiFacebook className="fi" />
                      <p>Facebook</p>
                    </div>
                    <div className="cons">
                      <FiInstagram className="fi" />
                      <p>Instagram</p>
                    </div>
                    <div className="cons">
                      <FiLinkedin className="fi" />
                      <p>Linkedin</p>
                    </div>
                    <div className="cons">
                      <FiTwitter className="fi" />
                      <p>Twitter</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-ing">
                <div className="ingredients">
                  <h3>Ingredients</h3>
                  <ul>
                    {getIngredients(recipe).map((ingredient, index) =>
                      <li key={index}>
                        {ingredient}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="measure">
                  <h3>Measurements</h3>
                  <li>
                    {recipe.strMeasure1}
                  </li>
                  <li>
                    {recipe.strMeasure2}
                  </li>
                  <li>
                    {recipe.strMeasure3}
                  </li>
                  <li>
                    {recipe.strMeasure4}
                  </li>
                  <li>
                    {recipe.strMeasure5}
                  </li>
                  <li>
                    {recipe.strMeasure5}
                  </li>
                  <li>
                    {recipe.strMeasure7}
                  </li>
                  <li>
                    {recipe.strMeasure8}
                  </li>
                  <li>
                    {recipe.strMeasure9}
                  </li>
                </div>
              </div>
              <div className="tips">
                <h3>Tips:</h3>
                <li>
                  Make sure to use quality ingredients for all your
                  dishes,look for authentic and natural products
                </li>
                <li>Work quickly and ensure all measurments are even</li>
                <li>
                  Have some backup measurements incase of any mistake or flaws
                </li>
              </div>
              <div className="vid-sec">
                <h3>
                  {recipe.strMeal}
                </h3>
                <video width="560" height="315" controls>
                  <source src={recipe.strYoutube} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};

export default RecipeDetail;
