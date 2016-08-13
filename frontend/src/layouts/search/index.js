import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../app'
import { toggleRecipeFavorite, findRecipe } from '../../actions/recipes.js'

import SearchForm from '../../components/search-form'
import RecipesList from '../../components/recipes-list'

require('./index.styl')

class Search extends Component {
 
  render() {
    const { recipes, toggleFavorite } = this.props;

    return (
        <App>
          <SearchForm/>
          <RecipesList 
          	recipes={recipes}
          	toggleFavorite={toggleFavorite}/>
        </App>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return { recipes: state.recipes };
  },
  function mapDispatchToProps(dispatch) {
    return {
      toggleFavorite: recipeId => dispatch(toggleRecipeFavorite(recipeId)),
      findRecipe: data => dispatch(findRecipe(data))
    }
  }
)(Search);