import { createStore, compose } from "redux";
import persistStore from "redux-persist/es/persistStore";
import appReducer from "./appReducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, {}, composeEnhancers());

const persistor = persistStore(store);

export { store, persistor };
