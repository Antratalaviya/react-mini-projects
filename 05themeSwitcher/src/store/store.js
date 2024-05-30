import {configureStore} from "@reduxjs/toolkit"
import themeReducer from '../store/themeSlicer'

const store = configureStore({
    reducer : themeReducer
});

export default store;