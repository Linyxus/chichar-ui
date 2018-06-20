import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyAppBar from './components/AppBar';
import IntroTable from './components/IntroTable';
import EntryList from './components/EntryList';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <MyAppBar />
        <IntroTable />
        <EntryList />
      </div>
    );
  }
}

export default App;
