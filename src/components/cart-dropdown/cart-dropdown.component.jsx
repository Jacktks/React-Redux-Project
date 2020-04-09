import React from 'react';

import './cart-dropdown.style.scss';

import {connect} from 'react-redux'; 

import CuttomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItems => <CartItem key={cartItems.id} item={cartItems}></CartItem>)
            }
        </div>
        <CuttomButton>GO TO CHECK OUT!</CuttomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);