import { createStore } from 'redux';
import cartReducer from './reducer';

let store = createStore(cartReducer)

export default store;