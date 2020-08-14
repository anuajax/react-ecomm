import React from 'react';
import Home from './components/Pages.Container.Components/homePage';
import './App.css';

import {Route,Switch,Redirect} from 'react-router-dom'; 
import ShopPage from './components/Pages.Container.Components/shopCollections.jsx';
import Navigation from './components/HeaderNav/header.comp.jsx';
import SignInAndSignUp from './components/Pages.Container.Components/LoginRegister/login-register';
import { auth, createUserProfileDocument, addShopCollectionsAndDocuments } from './firebase/firebase.utils';
import Checkout from './components/Pages.Container.Components/checkoutPage/checkout.copmponent';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/actions/actionCreators/user.actions.creator';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/selectors/user.selectors';
import {selectCollectionsForPreview} from './redux/selectors/shop.collection.selectors';
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
      addShopCollectionsAndDocuments('collections',this.props.collectionsArray.map(({title,items})=> ({title,items})));
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
    <Route path='/shop' component={ShopPage} />
    <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>) }/>
    <Route exact path='/checkout' component={Checkout}/>

</Switch>
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
