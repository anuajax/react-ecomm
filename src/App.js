import React, { Component } from 'react';
import Home from './components/Pages.Container.Components/homePage';
import './App.css';
import Hats from './components/HatsPage/hats';
import {Route,Switch} from 'react-router-dom'; 
import ShopPage from './components/Pages.Container.Components/shopCollections.jsx';
import Navigation from './components/HeaderNav/header.comp.jsx';
import SignInAndSignUp from './components/Pages.Container.Components/LoginRegister/login-register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },()=>{console.log(this.state)});
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render()
  {
    
  return (
    <div className="App">
    <Navigation currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/shop' component={ShopPage} />
    <Route exact path='/signin' component={SignInAndSignUp}/>
</Switch>
    </div>
  );
  }
}


export default App;
