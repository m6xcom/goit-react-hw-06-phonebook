import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contacts } from "./contacts/contacts-reducer";

// const contactsConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

const store = configureStore({
  reducer: { contacts: contacts },
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
// export const persistor = persistStore(store);
