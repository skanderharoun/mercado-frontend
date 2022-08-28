import {
    LOGIN,
    LOGOUT
} from '../types/userTypes';

const initialState = {
    isAuth: false,
    info: null,
    token: null
};

const userReducer = (state = initialState , action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuth: true, info: action.payload.user, token: action.payload.token};
        case LOGOUT:
            return {...state, isAuth: false, info: null, token: null};
        default:
            return state;
    }
}

export default userReducer