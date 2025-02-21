import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import settingReducer from "./settingSlice";


const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        setting: settingReducer
    }
})

export default appStore;