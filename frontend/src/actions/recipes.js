let nextRecipeId = 0
export const addRecipe = (data) => {
  return {
    type: 'ADD_RECIPE',
    id: nextRecipeId++,
    data
  }
}

export const toggleRecipeFavorite = (recipeId) => {
	return {
		type: 'TOGGLE_RECIPE_FAVORITE',
		id: recipeId
	}
} 