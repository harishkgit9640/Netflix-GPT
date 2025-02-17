import { createSlice } from "@reduxjs/toolkit";


const settingSlice = createSlice({
    name: "setting",
    initialState: {
        isDarkMode: false,
        isGptMode: false,
        language: "en"
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setGptMode: (state) => {
            state.isGptMode = !state.isGptMode;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
})


export const { toggleDarkMode, setGptMode, setLanguage } = settingSlice.actions;
export default settingSlice.reducer;