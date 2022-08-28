import { combineReducers } from 'redux'

import itemsReducer from './itemsReducer'
import feedbackReducer from './feedbackReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    items: itemsReducer,
    feedback: feedbackReducer,
    user: userReducer
})

export default rootReducer