import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleLookup from './components/SimpleLookup';
import AppBar from './components/AppBar';
<<<<<<< HEAD
import {teal500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500
  }
});
=======
import CourseFinder from './components/CourseFinder';
>>>>>>> 040b73d93e8c2d52fed7fe986abfa67c6565b372

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
<<<<<<< HEAD
          <AppBar backgroundColor={muiTheme.palette.primary}/>
          <SimpleLookup />
=======
          <AppBar />
          <CourseFinder />
>>>>>>> 040b73d93e8c2d52fed7fe986abfa67c6565b372
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
