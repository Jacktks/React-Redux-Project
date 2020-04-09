import React from 'react';

import './cart-dropdown.style.scss';

import {connect} from 'react-redux'; 
import {createStructuredSelector} from 'reselect';


import {selectCartItems} from '../../redux/cart/cart.selectors.js';

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

//truoc khi su dung createStructuredSelector trong reselect
// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// })

//sau khi su dung createStructuredSelector trong reselect
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);