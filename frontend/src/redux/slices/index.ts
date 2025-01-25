import { combineReducers } from 'redux';
import apiReducer from './apiSlice';

export const rootReducer = combineReducers({
  api: apiReducer,
});