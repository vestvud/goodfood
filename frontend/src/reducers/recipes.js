export default (recipes = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      recipes.push({
      	data: action.data,
      	id: action.id
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
    default:
      return recipes;
  }
}