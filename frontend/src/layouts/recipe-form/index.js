import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import App from '../app'
import { addRecipe } from '../../actions/recipes.js'

import { Paper, Divider, RaisedButton, FloatingActionButton, Chip, Snackbar } from 'material-ui'
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import ContentAdd from 'material-ui/svg-icons/content/add'

require('./index.styl');


class RecipeForm extends Component {

  state = {
    canSubmit: false,
    errorMessages: {
      numericError: "Пожалуйста, введите число"
    },
    tags: [],
    tagsIndex: 0,
    openSnackbar: false,
    snackbarMessage: 'Ваш рецепт был добавлен.'
  }

  enableButton = () => {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton = () => {
    this.setState({
      canSubmit: false,
    });
  }

  submitForm = (data) => {
    const {addRecipe} = this.props;
    if (this.state.tags.length) {
      data.tags = this.state.tags;
    }
    addRecipe(data);
    this.setState({openSnackbar: true});
  }

  notifyFormError = (data) => {
    console.error('Form error:', data);
  }

  addTagInput = () => {
    let value = this.tagInput.getValue();
    if (!value) {
      return;
    }
    let tags = this.state.tags;
    tags.push({title: value, key: this.state.tagsIndex + 1});
    this.setState({tags: tags, tagsIndex: ++this.state.tagsIndex});
    this.tagInput.setValue('');
  }

  deleteTag = (key) => {
    let tags = this.state.tags;
    const tagToDelete = tags.map((tag) => tag.key).indexOf(key);
    tags.splice(tagToDelete, 1);
    this.setState({tags: tags});
  }

  closeSnackbar = () => {
    this.setState({
      openSnackbar: false
    })
  }

  render() {
    const {addRecipe} = this.props;
    let { wordsError, numericError, urlError } = this.state.errorMessages;

    return (
        <App>
          <div className="recipe-form">
          <div className="recipe-form__title">Добавить новый рецепт</div>

          <Paper zDepth={2}>
            <Formsy.Form
              onValid={this.enableButton}
              onInvalid={this.disableButton}
              onValidSubmit={this.submitForm}
              onInvalidSubmit={this.notifyFormError}
            >
              <FormsyText style={{
                paddingLeft: '10px',
                fontWeight: 'bold'
              }} 
                hintText="Название" 
                underlineShow={false} 
                fullWidth={true}
                name="title"
                required
              />
              <Divider />
              <FormsyText style={{
                  paddingLeft: '10px'
                }} 
                hintText="Рецепт" 
                multiLine={true}
                underlineShow={false}
                fullWidth={true}
                name="text"
                required
              />
              <Divider />
              <div className="recipe-form__overflow">

                <div className="recipe-form__options">
                  <FormsyText style={{
                    paddingLeft: '10px',
                    display: 'inline-block',
                    width: '60px',
                    marginRight: '7px'
                  }} 
                    hintText="Белки"
                    name="proteins"
                    validations="isNumeric"
                    validationError={numericError}
                  />
                  <FormsyText style={{
                    paddingLeft: '10px',
                    display: 'inline-block',
                    width: '60px',
                    marginRight: '7px'
                  }} 
                    hintText="Жиры"
                    name="fats"
                    validations="isNumeric"
                    validationError={numericError}
                  />
                  <FormsyText style={{
                    paddingLeft: '10px',
                    display: 'inline-block',
                    width: '60px',
                    marginRight: '7px'
                  }} 
                    hintText="Углев."
                    name="carbohydrates"
                    validations="isNumeric"
                    validationError={numericError}
                  />
                </div>

                <FormsyText style={{
                  paddingLeft: '10px',
                  width: '130px',
                  float: 'right',
                  marginRight: '7px'
                }} 
                  hintText="Калорийность"
                  name="calorific"
                  validations="isNumeric"
                  validationError={numericError}
                />
              </div>  
              <div className="recipe-form__tags">
                {this.state.tags.map((tag)=>{
                  return (<Chip
                    key={tag.key}
                    onRequestDelete={() => this.deleteTag(tag.key)}
                    style={{
                      display: 'inline-block',
                      margin: '5px',
                      fontSize: '12px'
                    }}
                    >
                    {tag.title}
                    </Chip>)
                })}
                <div style={{marginTop: '5px'}}>
                  <FormsyText style={{
                    paddingLeft: '10px',
                    width: '130px',
                    }} 
                    hintText="Тег"
                    name="tag"
                    ref={(c) => this.tagInput = c}
                  />
                  <FloatingActionButton mini={true} 
                    style={{
                      marginLeft: '10px'
                    }}
                    onClick={this.addTagInput}
                    >
                    <ContentAdd />
                  </FloatingActionButton>
                </div>  
              </div>
          
              <div className="recipe-form__overflow">
                <RaisedButton 
                  label="Добавить" 
                  primary={true} 
                  style={{
                    float: 'right',
                    margin: '0 10px 10px 0'
                  }}
                  type="submit"
                  disabled={!this.state.canSubmit}
                />
              </div>
             </Formsy.Form>

            <Snackbar
              open={this.state.openSnackbar}
              message={this.state.snackbarMessage}
              action="закрыть"
              autoHideDuration={1000}
              onRequestClose={this.closeSnackbar}
            />
          </Paper>
        </div>
        </App>
    );
  }
};

export default connect(
  function mapStateToProps(state){
    return {}
  },
  function mapDispatchToProps(dispatch){
    return {
      addRecipe: data => dispatch(addRecipe(data))
    };
  }
)(RecipeForm);