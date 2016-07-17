import React, { PropTypes } from 'react'
import { GridList, GridTile } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

require('./index.styl')

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    overflowY: 'hidden',
    marginBottom: 10,
  },
};

const RecipesList = ({ recipes, onMovieClick }) => (
  <div>
    <GridList
      cols={8}
      style={styles.gridList}
      >
      {recipes.map((recipe) => (
        <GridTile
          title={recipe.nameRU}
          subtitle={<span><b>{recipe.genre}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          key={Math.random()}
        >
          <img src={`https://st.kp.yandex.net/images/${recipe.posterURL}`} />
        </GridTile>
      ))}
    </GridList>
  </div>
)

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired,
  onRecipeClick: PropTypes.func.isRequired
}

export default RecipesList