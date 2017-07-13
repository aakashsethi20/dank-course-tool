import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleLookup from './components/SimpleLookup';
import AppBar from './components/AppBar';

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar />
          <SimpleLookup />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
