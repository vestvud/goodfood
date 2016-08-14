import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import FavoritePin from 'material-ui/svg-icons/action/favorite';
import FavoriteBorderPin from 'material-ui/svg-icons/action/favorite-border';
import DeletePin from 'material-ui/svg-icons/content/delete-sweep';
import {red300} from 'material-ui/styles/colors';

require('./index.styl')

class RecipesList extends Component {

  render() {
    const { toggleFavorite, recipes, fetchDeleteRecipe } = this.props;

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
            {recipe.type ? <div className="recipe__type">recipe.type.title</div> : null}
            <div className="recipe__tags">
              {recipe.tags ? recipe.tags.map(function(tag){
                return (<div key={tag.key} className="recipe__tag">{tag.title}</div>)
              }) : null}
            </div>
            <div className="recipe__actions">
              { recipe.favorite ? 
                <FavoritePin 
                  onClick={() => toggleFavorite(recipe.id)} 
                  color={red300}/> : 
                <FavoriteBorderPin
                  onClick={() => toggleFavorite(recipe.id)} 
                  color={red300}/>
              }

              <DeletePin
                onClick={() => fetchDeleteRecipe(recipe.id)} />
            </div>
            <Link className="recipe__title" to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            <div className="recipe__text">{recipe.text}</div>
            <div className="recipe__options">
              {recipe.proteins ? <span>белки: {recipe.proteins}</span> : null}
              {recipe.carbohydrates ? <span>углеводы: {recipe.carbohydrates}</span> : null}
              {recipe.fats ? <span>жиры: {recipe.fats}</span> : null}
              {recipe.calorific ? <span>calorific: {recipe.calorific}</span> : null}
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