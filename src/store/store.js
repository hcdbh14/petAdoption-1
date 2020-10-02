
import userReducer from './user/reducer';
import petsReducer from './pets/reducer';
import authReducer from './auth/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    userReducer: userReducer,
    petsReducer: petsReducer,
    authReducer: authReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

