import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../../API/api";
import Navbar from "../Navbar";
import "./details.scss";
const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, [id]);

  const getIngredients = (recipe) => {
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
            </div>
          </div>
        </div>}
    </div>;
};

export default RecipeDetail;



// {recipe && (
//         <div className="content">
//           <div className="header">
//             <h2 className="title">{recipe.strMeal}</h2>
//           </div>
//           <div className="recipe-info">
//             <div className="image">
//               <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//             </div>
//             <div className="details">
//               <p>
//                 <strong>Category:</strong> {recipe.strCategory}
//               </p>
//               <p>
//                 <strong>Cook-Time:</strong> 20min
//               </p>
//               <p>
//                 <strong>Servings:</strong> 2-3
//               </p>
//               <p>
//                 <strong>Calories:</strong> 22kcal
//               </p>
//             </div>
//           </div>

//           <div className="ingredients">
//             <h3>Ingredients</h3>
//             <ul>
//               {getIngredients(recipe).map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="instructions">
//             <h3>Instructions</h3>
//             <p>{recipe.strInstructions}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
