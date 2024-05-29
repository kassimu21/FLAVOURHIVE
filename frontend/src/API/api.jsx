export const fetchMealsByLetter = async (letter) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch meals for letter ${letter}`);
  }
  const data = await response.json();
  return data.meals || [];
};

export const fetchAllRecipes = async () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const allMeals = [];

  for (const letter of alphabet) {
    const meals = await fetchMealsByLetter(letter);
    allMeals.push(...meals);
  }

  // console.log("meals here", allMeals);
  return allMeals;
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch recipe with ID ${id}`);
  }
  const data = await response.json();
  return data.meals[0];
};
