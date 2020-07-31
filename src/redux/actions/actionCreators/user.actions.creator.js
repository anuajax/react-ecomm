import {UserActionTypes} from '../action.Types/user.Types.action';
export  const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})