import { Reducer, combineReducers } from "redux";

export const initialState = {
  user: "JACK",
};

export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOL":
      return { ...state, user: "Evgheni" };
    default:
      return state;
  }
};
