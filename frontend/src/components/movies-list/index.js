import React, { PropTypes } from 'react'
import Movie from './movie.js'

require('./index.styl')

const Movies = ({ movies, onMovieClick }) => (
  <ul>
  {movies.map(movie =>
    <Movie
      key={movie.id}
      {...movie}
      onClick={() => onMovieClick(movie.id)}
    />
  )}
  </ul>
)

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func.isRequired
}

export default Movies