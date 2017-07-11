import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleLookup from './components/SimpleLookup';

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <SimpleLookup />
      </MuiThemeProvider>
    );
  }
}

export default App;
