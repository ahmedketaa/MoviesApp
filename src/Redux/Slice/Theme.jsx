import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    myTheme: "dark",
   
}
const Theme=createSlice({
    name:"theme",
    initialState:INITIAL_STATE
})