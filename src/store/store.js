import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import randomeQuoteApi from "./apis/randomApi";
import projectsSlice from "./slice/projectsSlice";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        [randomeQuoteApi.reducerPath]: randomeQuoteApi.reducer,
        projectData: projectsSlice

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(randomeQuoteApi.middleware);
    }
})

setupListeners(store.dispatch);

export default store;