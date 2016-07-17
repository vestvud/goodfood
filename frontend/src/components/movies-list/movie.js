import React from 'react'

const Movie = ({ onClick, text }) => (
  <li
    onClick={onClick}>
    {text}
  </li>
)

export default Movie