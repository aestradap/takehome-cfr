import {configureStore} from '@reduxjs/toolkit';
import assetsReducer from './slices/assetsSlice';
import exampleReducer from './slices/exampleSlice';
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        // example: exampleReducer,
        assets: assetsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();