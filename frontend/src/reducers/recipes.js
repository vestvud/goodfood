const recipe = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }

    default:
      return state
  }
}

const recipes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPES':
      return [
        ...state,
        recipe(undefined, action)
      ]
    default:
      return state
  }
}

export default recipes