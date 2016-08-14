import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../app'
import { toggleRecipeFavorite, fetchRecipes, fetchDeleteRecipe } from '../../actions/recipes.js'

import RecipesList from '../../components/recipes-list'

require('./index.styl')

class Recipes extends Component {

  componentWillMount() {
    this.props.fetchRecipes();
  }
 
  render() {
    const { history } = this.context;
    const { recipes, toggleFavorite, fetchDeleteRecipe } = this.props;

    return (
        <App>
          <RecipesList 
            recipes={recipes}
            toggleFavorite={toggleFavorite}
            fetchDeleteRecipe={fetchDeleteRecipe}/>
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
      fetchRecipes: () => dispatch(fetchRecipes()),
      fetchDeleteRecipe: recipeId => dispatch(fetchDeleteRecipe(recipeId))
    }
  }
)(Recipes);