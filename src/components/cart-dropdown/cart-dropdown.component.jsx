import React from 'react';

import './cart-dropdown.style.scss';

import CuttomButton from '../custom-button/custom-button.component';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <CuttomButton>GO TO CHECK OUT!</CuttomButton>
    </div>
)

export default CartDropdown;