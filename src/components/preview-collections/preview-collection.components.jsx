import React from 'react';
import './preview-collection.style.scss';
import CollectionItem from '../collections-item/collections-item.component'; 

const PreviewCollection = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((e, idx) => idx < 4).map(({id, ...otherItemsProps}) => (
                    <CollectionItem key={id} {...otherItemsProps}/>
                ))}
            </div>
        </div>
    )
}
export default PreviewCollection;