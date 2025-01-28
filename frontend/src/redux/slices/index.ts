import { combineReducers } from 'redux';
import challengesReducer from './challengesSlice';
import userReducer from './userSlice';
import participantReducer from './participantsSlice'

export const rootReducer = combineReducers({
  challenges: challengesReducer,
  user: userReducer,
  participants: participantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;