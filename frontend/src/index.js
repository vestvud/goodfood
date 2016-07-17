import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { addRecipe } from './actions'
import recipesReducer from './reducers/recipes.js'

import { App, Recipes, Recipe, RecipeForm, Page404 } from './layouts'

const rootReducer = combineReducers({
  recipes: recipesReducer
})

const store = createStore(rootReducer, {});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={RecipeForm} />
        <Route path='/recipeForm' component={Recipes} />
        <Route path='/recipes/:recipeId' component={Recipe} />
        <Route path='*' component={Page404} />
    </Router>
  </Provider>,
  document.getElementById('app')
)