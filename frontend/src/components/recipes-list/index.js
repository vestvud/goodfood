import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

require('./index.styl')

const RecipesList = ({ recipes }) => (
  <div>
    {recipes.map((recipe) => (
        <Paper className="recipe" 
          key={recipe.id}
          zDepth={1}
          style={{
            height: 200,
            width: 300,
            margin: 20,
            float: 'left',
            overflow: 'hidden',
            padding: '10px',
            position: 'relative'
          }}>
          <div className="recipe__tags">
            {recipe.data.tags.map(function(tag){
              return (<div className="recipe__tag">{tag}</div>)
            })}
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

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default RecipesList