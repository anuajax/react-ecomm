import React from 'react';
import Home from './components/homePage';
import './App.css';
import Hats from './components/HatsPage/hats';
import {Route,Switch} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={Home} />
    <Route  path='/hats' component={Hats} />
</Switch>
    </div>
  );
}

export default App;
