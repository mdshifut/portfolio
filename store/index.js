import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const exampleInitialState = {
  prevRoute: ""
};

export const actionTypes = {
  PREV_ROUTE: "PREV_ROUTE"
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.PREV_ROUTE:
      return {
        ...state,
        prevRoute: action.payload.prevRoute
      };

    default:
      return state;
  }
};

// ACTIONS

export const setPrevRoute = prevRoute => {
  return { type: actionTypes.PREV_ROUTE, payload: { prevRoute } };
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
