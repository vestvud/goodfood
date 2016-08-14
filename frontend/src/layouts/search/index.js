import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../app'
import { toggleRecipeFavorite, fetchRecipes } from '../../actions/recipes.js'
import { findRecipes, clearFoundRecipes } from '../../actions/found-recipes.js'

import SearchForm from '../../components/search-form'
import RecipesList from '../../components/recipes-list'

require('./index.styl')

class Search extends Component {

  componentWillMount() {
    this.props.fetchRecipes();
  }

  componentWillUnmount() {
    this.props.clearFoundRecipes();
  }
 
  render() {
    const { foundRecipes, toggleFavorite, findRecipes } = this.props;

    return (
        <App>
          <SearchForm findRecipes={findRecipes}/>
          <RecipesList 
            recipes={foundRecipes}
            toggleFavorite={toggleFavorite}/>
        </App>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    let foundRecipes = state.foundRecipes.length > 0 ? state.foundRecipes : state.recipes;
    return { foundRecipes: foundRecipes };
  },
  function mapDispatchToProps(dispatch) {
    return {
      toggleFavorite: recipeId => dispatch(toggleRecipeFavorite(recipeId)),
      findRecipes: data => dispatch(findRecipes(data)),
      clearFoundRecipes: () => dispatch(clearFoundRecipes()),
      fetchRecipes: () => dispatch(fetchRecipes())
    }
  }
)(Search);