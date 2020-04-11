import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollections} from '../../redux/shop/shop.selector';

import PreviewCollection from '../preview-collections/preview-collection.components';
import './collections-overview.style.scss';

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map( ({id, ...otherItemsProps}) => (
            <PreviewCollection key={id} {...otherItemsProps}/>
        ))}
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);