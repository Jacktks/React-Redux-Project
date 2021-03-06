import React from 'react';


import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './components/signin-and-signup/signin-and-singup.component';
import Header from './components/headers/header.component';


import {auth, createUserProfileDocument} from './firebase/firebase.utils';


import {setCurrentUser} from './redux/users/user.actions';
import {selectCurrentUser} from './redux/users/user.selectors';

import {toggleCartHidden} from './redux/cart/cart.actions';





class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);

      //addCollections vao firebase xong có thể delete
      // addColletionAndDocuments('collections', collectionArray)

  
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
 
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' render={() => this.props.currentUser ? (<CheckoutPage/>) : (<SignInAndSignUp/>)}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp/>)} />
        </Switch>
      </div>
    );
  }
}

//truoc khi su dung createStructuredSelector trong reselect
// const mapStateToProps = ({user}) => ({
//   currentUser : user.currentUser
// })

//sau khi su dung createStructuredSelector trong reselect
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: selectCollectionsForPreview // add vào xong firebase rồi có thể delete
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  toggleCartHidden: () => dispatch(toggleCartHidden()) 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);