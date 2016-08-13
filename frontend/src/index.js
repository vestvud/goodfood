import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { addRecipe } from './actions/recipes.js'
import { recipes, tags } from './reducers'

import { App, Recipes, Recipe, RecipeForm, Search, Page404 } from './layouts'

const rootReducer = combineReducers({
  recipes: recipes,
  tags: tags
})

const store = createStore(rootReducer, {recipes: [], tags: []});

store.subscribe(() => {
  console.log(store.getState().lastAction, store.getState());
});

store.dispatch(addRecipe({title: 'Курица под маринадом', text: 'Корень имбиря очистите от кожуры и мелко нарежьте. Разотрите в ступке сухие травы, несколько видов перца и очищенный чеснок. Апельсин тщательно вымойте. Снимите с апельсина цедру и выжмите сок. Соедините имбирь, чеснок, апельсиновый сок и цедру, измельченные перцы и травы. Влейте соевый соус и оливковое масло, перемешайте. Замаринуйте куриные грудки и уберите в холод на 4-8 часов. Выньте грудки из маринада, плотно заверните в фольгу и запекайте в разогретой до 190 градусов духовке 30-35 минут. ', 
  tags: [{key: 3, title: 'творог'}], 
  proteins: 20,
  carbohydrates: 15, 
  fats: 24,
  calorific: 230,
  type: {
    title: 'Основное блюдо',
    slug: 'main'
  }
}));

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