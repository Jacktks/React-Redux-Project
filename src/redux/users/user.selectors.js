import {createSelector} from 'reselect';

const selectUser = state => state.user; //state in trigger reducer


export const selectCurrentUser = createSelector(
    [selectUser], 
    user => user.currentUser
)