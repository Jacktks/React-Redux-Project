import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './components/signin-and-signup/signin-and-singup.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/headers/header.component';
import {auth} from './firebase/firebase.utils';





class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromauth = null;

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromauth();
  }

  render(){
    return (
      <div>
          <Header currentUser = {this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/signin" component={SignInAndSignUp}/>
          </Switch>
      </div>
    );
  }
  
}

export default App;
