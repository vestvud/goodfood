import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header'
import Footer from '../../components/footer'

function App({ pushPath, children }) {
  return (
  	<div>
  		<Header/>
		<main>
			{children}
		</main>
	    <Footer/>
  	</div>
  );
};

module.exports = connect()(App)