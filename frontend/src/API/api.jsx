export const fetchMealCategories = async () => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch meal categories");
  }
  const data = await response.json();
  return data.categories || [];
};

export const fetchMealAreas = async () => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch meal areas");
  }
  const data = await response.json();
  return data.meals || [];
};

export const fetchMealsByCategory = async (category) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch meals for category ${category}`);
  }
  const data = await response.json();
  return data.meals || [];
};

export const fetchMealsByArea = async (area) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch meals for area ${area}`);
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

  return allMeals;
};

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

export const fetchMealsBySearch = async (searchTerm) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch meals for search term ${searchTerm}`);
  }
  const data = await response.json();
  return data.meals || [];
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
