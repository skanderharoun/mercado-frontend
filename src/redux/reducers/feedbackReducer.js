import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCEEDED } from "../types/feedbackTypes";

const initialState = {
    loading: false,
    error: ""
};

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_STARTED: {
            return {
                ...state,
                loading: true
            }
        }
        case REQUEST_SUCCEEDED: {
            return {
                ...state,
                loading: false
            }
        }
        case REQUEST_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default feedbackReducer;