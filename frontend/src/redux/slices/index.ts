import { combineReducers } from 'redux';
import challengesReducer from './challengesSlice';

export const rootReducer = combineReducers({
  api: challengesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;