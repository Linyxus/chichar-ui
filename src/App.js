import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyAppBar from './components/AppBar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <MyAppBar />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
