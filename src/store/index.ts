import { combineEpics, createEpicMiddleware } from "redux-observable";
import { createStore, applyMiddleware } from "redux";

import { rootReducer, initialState } from "./reducer";
import { of } from "rxjs";
import { filter, mapTo, tap } from "rxjs/operators";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleWare = createEpicMiddleware();
const loginEpic = (action$) =>
  action$.pipe(
    filter((action: any) => action.type === "OMG"),
    mapTo({ type: "LOL" })
  );
const rootEpic = combineEpics(loginEpic);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(epicMiddleWare))
  );
  epicMiddleWare.run(rootEpic);
  return store;
}
