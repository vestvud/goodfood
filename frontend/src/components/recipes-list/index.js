import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import FavoritePin from 'material-ui/svg-icons/action/favorite';
import FavoriteBorderPin from 'material-ui/svg-icons/action/favorite-border';
import {red300} from 'material-ui/styles/colors';

require('./index.styl')

class RecipesList extends Component {

  render() {
    const { toggleFavorite, recipes } = this.props;

    return (
      <div className="recipes">
        {recipes.map((recipe) => (
            <Paper className="recipe" 
              key={recipe.id}
              zDepth={1}
              style={{
                height: 200,
                width: 300,
                margin: 10,
                float: 'left',
                overflow: 'hidden',
                padding: '10px',
                position: 'relative'
              }}>
              <div className="recipe__type">{recipe.data.type.title}</div>
              <div className="recipe__tags">
                {recipe.data.tags ? recipe.data.tags.map(function(tag){
                  return (<div key={tag.key} className="recipe__tag">{tag.title}</div>)
                }) : null}
              </div>
              <div className="recipe__favorite" onClick={() => toggleFavorite(recipe.id)}>
                { recipe.favorite ? <FavoritePin color={red300}/> : <FavoriteBorderPin color={red300}/>}
              </div>
              <Link className="recipe__title" to="/ff">{recipe.data.title}</Link>
              <div className="recipe__text">{recipe.data.text}</div>
              <div className="recipe__options">
              {recipe.data.proteins ? <span>белки: {recipe.data.proteins}</span> : null}
              {recipe.data.carbohydrates ? <span>углеводы: {recipe.data.carbohydrates}</span> : null}
              {recipe.data.fats ? <span>жиры: {recipe.data.fats}</span> : null}
              {recipe.data.calorific ? <span>calorific: {recipe.data.calorific}</span> : null}
              </div>
            </Paper>
          ))}
      </div>
    )
  }
};

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipesList