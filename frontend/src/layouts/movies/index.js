import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../app'

import MoviesList from '../../components/movies-list'

require('./index.styl')

class Movies extends Component {
 
  render() {
    const { history } = this.context;
    const { movies } = this.props;

    return (
        <App>
          <MoviesList 
          	movies={movies}
          	onMovieClick={function(){}}/>
        </App>
    );
  }
}

export default connect(state => ({
  movies: state.movies
}))(Movies);