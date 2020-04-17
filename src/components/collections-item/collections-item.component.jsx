import React from 'react';

import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';


import { selectCurrentUser } from '../../redux/users/user.selectors';

import {addItem, toggleCartHidden} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem, currentUser,history}) => {

    const {name,price,imageUrl} = item;
    return(
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => {
                
                if( currentUser === null){
                    alert('Please login and then add cart!')
                    history.push('/signin')
                } else {
                    addItem(item);
                }
            }} inverted>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionItem));