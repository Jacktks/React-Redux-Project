
import CartActionTypes from './cart.types';

import {addItemToCart, removeQuantityItemtoCheckout} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state, 
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_CART_FROM_CHECK_OUT:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        case CartActionTypes.REMOVE_QUANTITY:
            return {
                ...state,
                cartItems: removeQuantityItemtoCheckout(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
}
export default cartReducer;