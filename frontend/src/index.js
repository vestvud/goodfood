import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import thunk from 'redux-thunk'

import { addRecipe } from './actions/recipes.js'
import { recipes, tags, foundRecipes } from './reducers'

import { App, Recipes, Recipe, RecipeForm, Search, Page404 } from './layouts'

const rootReducer = combineReducers({
  recipes,
  tags,
  foundRecipes
})

const store = createStore(rootReducer, {recipes: [], tags: [], foundRecipes: []}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={RecipeForm} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/search' component={Search} />
        <Route path='/recipes/:recipeId' component={Recipe} />
        <Route path='*' component={Page404} />
    </Router>
  </Provider>,
  document.getElementById('app')
)