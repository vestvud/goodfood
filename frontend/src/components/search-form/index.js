import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {TextField, SelectField, MenuItem} from 'material-ui';

require('./index.styl')

class SearchForm extends Component {

  state = {
    typeValue: 1
  }

  onSelectInput = (event, value) => {
    this.props.findRecipes(value);
  }

  typeChange = (event, index, typeValue) => this.setState({typeValue});

  render() {
    return (
      <div className="search-form">
		    <TextField
          hintText="Поиск по названию, в тексте"
          fullWidth={true}
          onChange={this.onSelectInput}
        />

        <SelectField value={this.state.typeValue}
        	onChange={this.typeChange}
        	floatingLabelText="Выберите тип блюда"
          	floatingLabelFixed={true}
          >
          <MenuItem value={1} primaryText="Любое" />
          <MenuItem value={2} primaryText="Второе" />
          <MenuItem value={3} primaryText="Суп" />
          <MenuItem value={4} primaryText="Салат" />
          <MenuItem value={5} primaryText="Десерт" />
        </SelectField>
      </div>
    )
  }
};

export default SearchForm