import React, { Component } from 'react';
import Home from './components/Pages.Container.Components/homePage';
import './App.css';
import Hats from './components/HatsPage/hats';
import {Route,Switch,Redirect} from 'react-router-dom'; 
import ShopPage from './components/Pages.Container.Components/shopCollections.jsx';
import Navigation from './components/HeaderNav/header.comp.jsx';
import SignInAndSignUp from './components/Pages.Container.Components/LoginRegister/login-register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/actions/actionCreators/user.actions.creator';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/selectors/user.selectors';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          },()=>{console.log(this.state)});
        });
      }

      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render()
  {
    
  return (
    <div className="App">
    <Navigation/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/shop' component={ShopPage} />
    <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>) }/>
</Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
