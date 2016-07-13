import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import Index from './layouts/index/index.js'
import Movies from './layouts/movies/index.js'
import Movie from './layouts/movie/index.js'
import Page404 from './layouts/page404/index.js'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}/>
    <Route path="movies/:movieId" component={Movie}/>
	<Route path="movies" component={Movies}/>
	<Route path="*" component={Page404}/>
  </Router>
), document.getElementById('app'))