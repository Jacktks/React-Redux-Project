import React from 'react';

import './cart-dropdown.style.scss';

import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import {selectCartItems} from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCurrentUser } from '../../redux/users/user.selectors';

import CuttomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, dispatch, currentUser}) => (//dispatch duoc su dung tu ...otherProps consolog otherProps ra no se~ co truong` dispatch
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length 
                ? 
                cartItems.map(cartItems => <CartItem key={cartItems.id} item={cartItems}></CartItem>)
                :
                <span className="empty-message">Your cart is empty!</span>
            }
        </div>
        <CuttomButton onClick={() => 
            {
                if(currentUser === null){
                    history.push('/signin')
                } else {
                    history.push('/checkout')
                }
                dispatch(toggleCartHidden());
            }
        }>
            GO TO CHECK OUT!
        </CuttomButton>
    </div>
)

//truoc khi su dung createStructuredSelector trong reselect
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// })

//sau khi su dung createStructuredSelector trong reselect
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser
})

//cach 2: su dung dispatchToprops thay cho dispatch o tren
// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// })

//use withRouter high order component
export default withRouter(connect(mapStateToProps)(CartDropdown));