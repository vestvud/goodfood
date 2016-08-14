import fetch from 'isomorphic-fetch'

export const addRecipe = (data) => {
  return {
    type: 'ADD_RECIPE',
    data
  }
}

export const addRecipes = (recipes) => {
  return {
    type: 'ADD_RECIPES',
    recipes
  }
}

export const fetchAddRecipe = (recipe) => {
  return dispatch => {

    fetch('/addRecipe', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(recipe)
    })
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      response.json().then(function(data) {
        if (data.success) {
          dispatch(addRecipe({
            id: data.id,
            recipe: recipe
          }));
        }
      });
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }
}

export const toggleRecipeFavorite = (recipeId) => {
  return {
    type: 'TOGGLE_RECIPE_FAVORITE',
    id: recipeId
  }
}

export const fetchRecipes = () => {
  return dispatch => {

    fetch('/getRecipes')
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        response.json().then(function(data) {
          dispatch(addRecipes(data));
        });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }
}

export const fetchRecipe = (id) => {
  return dispatch => {

    fetch('/getRecipe/' + id)
      .then((response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        response.json().then(function(data) {
          dispatch(addRecipes(data));
        });
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }
}

export const deleteRecipe = (recipeId) => {
  return {
    type: 'DELETE_RECIPE',
    recipeId: recipeId
  }
}

export const fetchDeleteRecipe = (recipeId) => {
  return dispatch => {

    fetch('/deleteRecipe', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({recipeId: recipeId})
    })
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      response.json().then(function(data) {
        if (data.success) {
          dispatch(deleteRecipe(recipeId));
        }
      });
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }
}