import {createSelector} from 'reselect';


const selectShop = state => state.shop;



export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//phuong thuc Object.keys.map object de .map object, neu nhu de .map array nhu cu~ o? component collections-overview se~ bao loi~ map!
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectItems = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
)