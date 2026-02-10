import { legacy_createStore as createStore } from 'redux';
import employeReducer from './reducer'

const store = createStore(employeReducer);
export default store;