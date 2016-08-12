import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { addRecipe } from './actions'
import { recipes, tags } from './reducers'

import { App, Recipes, Recipe, RecipeForm, Page404 } from './layouts'

const rootReducer = combineReducers({
  recipes: recipes,
  tags: tags
})

const store = createStore(rootReducer, {recipes: [], tags: []});

store.subscribe(() => {
  console.log(store.getState().lastAction, store.getState());
});

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