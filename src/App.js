import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from '../src/components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
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
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
        createUserProfileDocument(user);
      });
    }
    
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
    
    render() {
    return (
      <div>
      <Header currentUser = { this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
