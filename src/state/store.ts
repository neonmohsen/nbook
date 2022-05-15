import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ActionType } from "./actions-types";
import reducers from './reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
    type : ActionType.INSERT_CELL_AFTER,
    payload : {
      id : '',
      type : 'code'  
    }
})
store.dispatch({
    type : ActionType.INSERT_CELL_AFTER,
    payload : {
      id : '',
      type : 'text'  
    }
})
store.dispatch({
    type : ActionType.INSERT_CELL_AFTER,
    payload : {
      id : '',
      type : 'code'  
    }
})

