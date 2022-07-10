import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//리듀서를 하나로 합쳐주기 위함.

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;