import React from 'react';

import {connect} from 'react-redux';

import {selectItems} from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collections-item/collections-item.component';

import './collection.style.scss';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
    
}


//match.params bởi <Router render={() => collection có trường match and params}>
const mapStateToProps = (state, ownProps) => ({
    collection: selectItems(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);