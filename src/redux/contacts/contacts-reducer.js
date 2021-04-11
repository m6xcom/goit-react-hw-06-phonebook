import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { ADDCONTACT, FILTERCHANGE, DELETECONTACT } from "./contacts-actions";

const items = createReducer([], {
  [ADDCONTACT.type]: (state, { payload }) => {
    return [...state, payload];
  },
  [DELETECONTACT.type]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
});

const filter = createReducer("", {
  [FILTERCHANGE.type]: (state, { payload }) => payload,
});

export const contacts = combineReducers({
  items,
  filter,
});
