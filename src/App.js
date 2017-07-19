import React from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleLookup from './components/SimpleLookup';
import AppBar from './components/AppBar';
import CourseFinder from './components/CourseFinder';

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar />
          <CourseFinder />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
