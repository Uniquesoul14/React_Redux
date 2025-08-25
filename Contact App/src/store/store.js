import { configureStore } from "@reduxjs/toolkit";  
import formDataSlice from '../feature/formSlice'
import reducer from "../feature/formSlice";

const store = configureStore({
    reducer:{
        userData : formDataSlice
    }
})

export default store;