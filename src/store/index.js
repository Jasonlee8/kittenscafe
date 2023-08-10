import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk'
//import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer"

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

const reducer = combineReducers({
  //cart: cartReducer,
  user: userReducer
})

const persistedState = loadState();

const store = createStore(
  reducer,
  persistedState,
  compose(applyMiddleware(thunk)
  //,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //this sentence cannot be used with compose method, 
  //but can use createStore(reducer, composeWithDevTools (applyMiddleware(thunk)) instead
))

  store.subscribe(() => {
    saveState(store.getState()
    //   email: store.getState().email,
    //   first_name: store.getState().first_name,
    //   last_name: store.getState().last_name,
    //   isLogin: store.getState().isLogin
    );
  });

  export default store;