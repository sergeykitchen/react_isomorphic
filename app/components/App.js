import React from 'react'

import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import List from './List';
import Home from './Home'


const App = (props) => {

  const {pokemon} = props;

  return (
    <div>
      Your React Node is Set up!
      <Switch>
        <Route path="/"  exact component={Home}/>
        <Route path="/pokemon" exact  render={() => <Redirect to="/pokemon/ability/telepathy"/>}/>
        <Route path="/pokemon/ability/:ability" render={(location) => <List pokemon={pokemon.list} location={location}/>}/>
      </Switch>
    </div>
  )
}

export default App
