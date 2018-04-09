import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Beers from './Beers';
import ShowBeer from './ShowBeer';
import Breweries from './Breweries';
import ShowBreweries from './ShowBreweries';

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/breweries' component={Breweries} />
          <Route exact path='/beer/:id' component={ShowBeer} />
          <Route exact path='/brewery/:id' component={ShowBreweries} />
          <Route component={NoMatch} />
        </Switch>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: 'black',
  },
}

export default App;
