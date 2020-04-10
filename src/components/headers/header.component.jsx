import React from 'react';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from '../../redux/users/user.selectors';


import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import './header.style.scss';

const Header = ({currentUser, hidden}) => {
    return(
            <div className='header'>
              <Link className='logo-container' to='/'>
                <Logo className='logo' />
              </Link>
              <div className='options'>
                <Link className='option' to='/shop'>
                  SHOP  
                </Link>
                <Link className='option' to=''>
                  CONTACT
                </Link>
                {
                  currentUser ? 
                    <div className="option">
                      <div>Hi! {currentUser.displayName}</div>
                      <div onClick={() => auth.signOut()}>SIGN OUT!</div>
                    </div> 
                    : 
                    <Link className="option" to='/signin'>SIGN IN!</Link>
                }
                <CartIcon/>
              </div>
              {hidden ? null : <CartDropdown/> }
            </div>
    )
};

//truoc
// const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
//   // currentUser: state.user.currentUser
//   currentUser,
//   hidden
// })

//sau khi log out thi gio hang bi mat' di chu ko con`
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);