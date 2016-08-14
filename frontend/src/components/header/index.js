import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReceiptPin from 'material-ui/svg-icons/action/receipt';
import AddPin from 'material-ui/svg-icons/content/add';
import SearchPin from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router'
import {teal100} from 'material-ui/styles/colors';

require('./index.styl')

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__title">Мои рецепты правильного питания</div>
        <div className="tabs">
          <Link className="tab" to='/'>
            <AddPin color={teal100}/>
            <span>Добавить</span>
          </Link>
          <Link className="tab" to='/recipes'>
            <ReceiptPin color={teal100}/>
            <span>рецепты</span>
          </Link>
         <Link className="tab" to='/search'>
            <SearchPin color={teal100}/>
            <span>Поиск</span>
         </Link>
      </div>
     </div>
    )
  }
};

export default connect()(Header);