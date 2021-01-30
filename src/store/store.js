import petsReducer from './pets/reducer';
import spotLightReducer from './spotLight/reducer';
import detailReducer from './petDetails/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    petsReducer: petsReducer,
    spotLightReducer: spotLightReducer,
    detailReducer: detailReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

