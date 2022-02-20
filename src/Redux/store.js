import {createStore} from "redux"

import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './Reducer/rootReducer'
//A function create store to create global store for stste change of bat updation in everry component throughout the project

const store = createStore(rootReducer,composeWithDevTools());

export default store;
