import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../app'
import { addRecipe } from '../../actions'

import { TextField, Paper, Divider, RaisedButton, FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'

require('./index.styl')

const Recipes = ({dispatch}) => {

    let titleInput, 
      recipeInput, 
      proteinsInput, 
      fatsInput, 
      calorificInput, 
      carbohydratesInput;

    return (
        <App>
          <div className="recipe-form">
          <div className="recipe-form__title">Добавить новый рецепт</div>

          <Paper zDepth={2}>
            <TextField style={{
              paddingLeft: '10px',
              fontWeight: 'bold'
            }} 
              hintText="Название" 
              underlineShow={false} 
              fullWidth={true}
              ref={node => {
                titleInput = node
              }}
            />
            <Divider />
            <TextField style={{
                paddingLeft: '10px'
              }} 
              hintText="Рецепт" 
              multiLine={true}
              underlineShow={false}
              fullWidth={true}
              ref={node => {
                recipeInput = node
              }}
            />
            <Divider />
            <div className="recipe-form__overflow">

              <div className="recipe-form__options">
                <TextField style={{
                  paddingLeft: '10px',
                  display: 'inline-block',
                  width: '60px',
                  marginRight: '7px'
                }} 
                  hintText="Белки"
                  ref={node => {
                    proteinsInput = node
                  }}
                />
                <TextField style={{
                  paddingLeft: '10px',
                  display: 'inline-block',
                  width: '60px',
                  marginRight: '7px'
                }} 
                  hintText="Жиры"
                  ref={node => {
                    fatsInput = node
                  }}
                />
                <TextField style={{
                  paddingLeft: '10px',
                  display: 'inline-block',
                  width: '60px',
                  marginRight: '7px'
                }} 
                  hintText="Углев."
                  ref={node => {
                    carbohydratesInput = node
                  }}
                />
              </div>

              <TextField style={{
                paddingLeft: '10px',
                width: '130px',
                float: 'right',
                marginRight: '7px'
              }} 
                hintText="Калорийность"
                ref={node => {
                  calorificInput = node
                }}
              />
            </div>  
            <div className="recipe-form__tags">
              <TextField style={{
                paddingLeft: '10px',
                width: '130px',
              }} 
                hintText="Тег" 
              />
              <FloatingActionButton mini={true} 
                style={{
                  marginLeft: '10px'
                }}>
                <ContentAdd />
              </FloatingActionButton>
            </div>
        
            <div className="recipe-form__overflow">
              <RaisedButton label="Добавить" 
              primary={true} 
              style={{
                float: 'right',
                margin: '0 10px 10px 0'
              }}
              onClick={e => {
                e.preventDefault()
                let data = {
                  title: titleInput.value, 
                  recipe: recipeInput.value, 
                  proteins: proteinsInput.value, 
                  fats: fatsInput.value, 
                  calorific: calorificInput.value, 
                  carbohydrates: carbohydratesInput.value
                }
                console.log(data, 'data');
                dispatch(addRecipe(data))
                data = {};
              }}
              />
            </div>
          </Paper>
        </div>
        </App>
    );
}

export default connect()(Recipes);