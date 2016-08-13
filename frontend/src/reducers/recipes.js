export default (recipes = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      recipes.push({
      	data: action.data,
      	id: action.id
      });	
      return recipes;
    case 'TOGGLE_RECIPE_FAVORITE':
      return recipes.filter(recipe => {
        if (recipe.get('id') === action.id) {
          return recipe.update('favorite', isFavorite => !isFavorite);
        } else {
          return recipe;
        }
      });
      return recipes;  
    default:
      return recipes;
  }
}