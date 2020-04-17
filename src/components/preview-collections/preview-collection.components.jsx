import React from 'react';
import './preview-collection.style.scss';
import CollectionItem from '../collections-item/collections-item.component'; 
import {withRouter} from 'react-router-dom';

const PreviewCollection = ({title, items, history, routeName}) => {
    return(
        <div className="collection-preview">
            <div className="title">
                <h1 className="titles">{title.toUpperCase()}</h1>
                <h1 className="more" onClick={() => history.push(`/shop/${routeName}`)}>MORE >></h1>
            </div>
            <div className="preview">
                { items.filter( (item,idx) => idx < 4)
                    .map( (item) => 
                            (
                                <CollectionItem key={item.id} item={item}/>
                            )
                        )
                }
            </div>
        </div>
    )
}
export default withRouter(PreviewCollection);