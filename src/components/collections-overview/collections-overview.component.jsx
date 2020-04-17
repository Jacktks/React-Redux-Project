import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

import PreviewCollection from '../preview-collections/preview-collection.components';
import './collections-overview.style.scss';

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map( ({id, ...otherItemsProps}) => (
            <PreviewCollection key={id} {...otherItemsProps}/>
        ))}
    </div>
)

//Neu muon object.map thay vi array.map thi phai thay selectCollection bang selectCollectionsForPreview ben kia
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);