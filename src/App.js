import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleLookup from './components/SimpleLookup';
import AppTabs from './components/AppTabs';
import AppBar from './components/AppBar';
import {teal500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
          <AppBar backgroundColor={muiTheme.palette.primary}/>
          <AppTabs />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
