import axios from 'axios';
import { alertSuccess } from '../../utils/feedback';

import {
    SET_ALL_ITEMS,
    SELECT_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM,
    ADD_ITEM
} from '../types/itemsTypes';
import { requestFailed, requestStarted, requestSucceeded } from './feedbackActionCreators';


export const setAllItems = (items) => ({ type: SET_ALL_ITEMS, payload: items });
// setAllItems([{title: 'A'}, {title: 'B'}])
export const selectItem = (item) => ({ type: SELECT_ITEM, payload: item });

export const removeItem = (itemId) => ({ type: REMOVE_ITEM, payload: itemId });

export const updateItem = (itemId, data) => ({ type: UPDATE_ITEM, payload: { id: itemId, data } });

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });


export const fetchAllItems = () => {
    return async (dispatch) => {
        dispatch(requestStarted())
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/items`)
            dispatch(requestSucceeded())
            const items = res.data
            dispatch(setAllItems(items))
        } catch (error) {
            console.log({ error });
            dispatch(requestFailed(error))
        }
    }
}

export const requestCreatingItem = (data, history) => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        dispatch(requestStarted())
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/items`, data, {headers: {authorization: token}})            
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
            }
            if (res.data && res.data.item && res.data.item._id) {
                dispatch(addItem({ ...data, _id: res.data.item._id }))
                history.push('/items')
            }
        } catch (err) {
            dispatch(requestFailed(err))
        }
    }
}


export const fetchItemById = (id) => {
    return async (dispatch) => {
        dispatch(requestStarted())
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/${id}`)
            dispatch(requestSucceeded())
            const item = res.data
            dispatch(selectItem(item))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}


export const requestUpdatingItem = (id, data, history) => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        dispatch(requestStarted())
        try {
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/items/${id}`, data, {headers: {authorization: token}})
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
                history.push('/items')
            }
            dispatch(updateItem(id, data))
        } catch (err) {
            dispatch(requestFailed(err))
        }
    }
}

export const requestDeletingItem = (itemId, closeModal) => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        dispatch(requestStarted())
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/items/${itemId}`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
            }
            dispatch(removeItem(itemId))
            closeModal()
        } catch (err) {
            dispatch(requestFailed(err))
        }
    }
}