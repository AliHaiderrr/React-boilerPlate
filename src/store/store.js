import { configureStore } from "@reduxjs/toolkit";
import LoaderSlice from "./slices/Loader/LoaderSlice";

export const store = configureStore({
    reducer: {
        // Add your all slices here
        LoaderSlice,
    },
})