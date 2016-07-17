let nextMovieId = 0
export const addMovie = (text) => {
  return {
    type: 'ADD_MOVIE',
    id: nextMovieId++,
    text
  }
}