import React from 'react';
import Home from './components/Pages.Container.Components/homePage';
import './App.css';
import Hats from './components/HatsPage/hats';
import {Route,Switch} from 'react-router-dom'; 
import ShopPage from './components/Pages.Container.Components/shopCollections.jsx';
import Navigation from './components/HeaderNav/header.comp.jsx';
function App() {
  return (
    <div className="App">
    <Navigation/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/shop' component={ShopPage} />
</Switch>
    </div>
  );
}

export default App;
