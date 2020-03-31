import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './components/signin-and-signup/signin-and-singup.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/headers/header.component';





function App() {
  return (
    <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUp}/>
        </Switch>
    </div>
  );
}

export default App;
