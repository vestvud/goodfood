let nextRecipeId = 0
export const addRecipe = (data) => {
  return {
    type: 'ADD_RECIPE',
    id: nextRecipeId++,
    data
  }
}