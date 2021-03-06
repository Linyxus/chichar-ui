import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyAppBar from './components/AppBar';
import Main from './Main';
import EntryInfo from './EntryInfo';
import Collection from './Collection';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <MyAppBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/info/:id" component={EntryInfo} />
          <Route exact path="/collect/:id" component={Collection} />
        </Switch>
      </div>
    );
  }
}

export default App;
