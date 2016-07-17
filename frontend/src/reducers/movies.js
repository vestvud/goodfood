const movie = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }

    default:
      return state
  }
}

const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        movie(undefined, action)
      ]
    default:
      return state
  }
}

export default movies