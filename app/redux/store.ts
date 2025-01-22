import {configureStore} from '@reduxjs/toolkit';
import assetsReducer from './slices/assetsSlice';
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        assets: assetsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>();