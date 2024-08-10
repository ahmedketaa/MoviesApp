import {createSlice}  from "@reduxjs/toolkit";
import en from "../../language/EN";
import ar from "../../language/AR";



const translation = {
    en: en,
    ar: ar
}

const INITIAL_STATE = {
    myLang: "en",
    translation: translation["en"]
}


const language = createSlice({
    name: "language",
    initialState: INITIAL_STATE,
    reducers: {
        setLanguage(state, action) {
            state.myLang = action.payload; 
            state.translation = translation[action.payload]; 
        }
    }
})

export default language.reducer

export const {setLanguage} = language.actions