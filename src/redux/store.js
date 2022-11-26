import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { recordReducer, recordsReducer} from './reducer';

const reducer = combineReducers({ records : recordsReducer, record : recordReducer })

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;