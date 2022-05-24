import { createStore } from 'redux'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
 
import logger from 'redux-logger';
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer"



const middlewares = [reduxThunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(...middlewares)));


export default store