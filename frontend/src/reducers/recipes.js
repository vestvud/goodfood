export default (recipes = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      recipes.push({
        ...action.data.recipe,
        id: action.data.id
      });
      return recipes;
    case 'TOGGLE_RECIPE_FAVORITE':
      return recipes.map(recipe => {
        if (recipe.id === action.id) {
          recipe.favorite = !recipe.favorite;
        }
        return recipe;
      });
      return recipes;
    case 'ADD_RECIPES':
      var recipes = [];
      action.recipes.forEach(recipe => {
        recipes.push(recipe);
      });

      return recipes;
    case 'DELETE_RECIPE':
      return recipes.filter(recipe => {
        return recipe.id !== action.recipeId;
      });
    default:
      return recipes;
  }
}