import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { addMovie } from './actions'
import moviesReducer from './reducers/movies.js'

import { App, Movies, Movie, Page404 } from './layouts'


const rootReducer = combineReducers({
  movies: moviesReducer
})

const store = createStore(rootReducer, {
    movies: []
})

store.dispatch(addMovie('cinema1'))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={Movies} />
        <Route path='/movies/:movieId' component={Movie} />
        <Route path='*' component={Page404} />
    </Router>
  </Provider>,
  document.getElementById('app')
)