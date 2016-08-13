import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {AutoComplete, SelectField, MenuItem} from 'material-ui';

require('./index.styl')

class SearchForm extends Component {

  state = {
  	dataSource: [],
  	typeValue: 1
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  onSelectInput = (value) => {
    this.props.findRecipes(value);
  }

  typeChange = (event, index, typeValue) => this.setState({typeValue});

  render() {
    return (
      <div className="search-form">
		<AutoComplete
          hintText="Поиск по названию, тегу"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.onSelectInput}
          fullWidth={true}
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