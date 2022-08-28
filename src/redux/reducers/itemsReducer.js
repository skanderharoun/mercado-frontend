import {
    SET_ALL_ITEMS,
    SELECT_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM,
    ADD_ITEM
} from '../types/itemsTypes';

const initialState = {
    all: [],
    selected: null
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_ITEMS:
            return { ...state, all: action.payload };
        case SELECT_ITEM:
            return { ...state, selected: action.payload };
        case REMOVE_ITEM:
            return { ...state, all: state.all.filter(item => item._id !== action.payload) };
        case UPDATE_ITEM:
            return { ...state, all: state.all.map(item => item._id === action.payload.id ? { ...item, ...action.payload.data } : item) };
        case ADD_ITEM:
            return { ...state, all: [...state.all, action.payload] };
        default:
            return state;
    }
}
// {
//     type: UPDATE_ITEM,
//     payload: {
//         id: '_32658fdsf45dsfd32',
//         dat: {
//             title: 'Test',
//             description: 'Ok'
//         }
//     }
// }

export default itemsReducer