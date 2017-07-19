import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleLookup from './components/SimpleLookup';
import AppBar from './components/AppBar';
import {teal500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CourseFinder from './components/CourseFinder';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500
  }
});


class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar className='appbar' />
          <SimpleLookup />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
