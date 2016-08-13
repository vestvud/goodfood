import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../app'
import { toggleRecipeFavorite } from '../../actions/recipes.js'

import RecipesList from '../../components/recipes-list'

require('./index.styl')

class Recipes extends Component {
 
  render() {
    const { history } = this.context;
    const { recipes } = this.props;

    return (
        <App>
          <RecipesList 
          	recipes={recipes}
          	onRecipeClick={function(){}}/>
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
      toggleFavorite: recipeId => dispatch(toggleRecipeFavorite(recipeId))
    }
  }
)(Recipes);