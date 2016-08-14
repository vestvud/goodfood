import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from '../../components/header'

const lightMuiTheme = getMuiTheme(lightBaseTheme)
injectTapEventPlugin();

require('./index.styl')

function App({ pushPath, children }) {
  return (
    <div className="app-layout">
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <Header/>
          <main>
            {children}
          </main>
        </div>
       </MuiThemeProvider>
    </div>
  );
};

module.exports = connect()(App)