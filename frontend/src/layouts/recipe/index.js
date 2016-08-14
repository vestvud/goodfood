import React, { Component, PropTypes } from 'react'
import App from '../app'
import { connect } from 'react-redux'
import { fetchRecipe } from '../../actions/recipes.js'

require('./index.styl')

class Recipe extends Component {

  componentWillMount() {
    this.props.fetchRecipe(this.props.params.recipeId);
  }
  
  render() {
  	let recipe = {};
    this.props.recipes.forEach((item)=>{
      if (item.id == this.props.params.recipeId) {
      	recipe = item;
      }    	
    });

    return (
      <App>
        <div className="recipe">
          <div className="recipe__title">{recipe.title}</div>
          <div className="recipe__type">{recipe.type}</div>
          <div className="recipe__text">{recipe.text}</div>
        </div>
      </App>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {recipes: state.recipes};
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchRecipe: (id) => dispatch(fetchRecipe(id))
    }
  }
)(Recipe);