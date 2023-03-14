import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {compose} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    auth: authReducer
})
const composedEnhancer = composeWithDevTools({
    // Specify enhancer options here, if any
  }) as typeof compose;
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    enhancers: [composedEnhancer],
  });
export type RootState = ReturnType<typeof rootReducer>;

export default store;