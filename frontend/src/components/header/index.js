import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

require('./index.styl')

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<div className="header__title">Мои рецепты правильного питания</div>
      </div>
    )
  }
};

export default connect()(Header);