import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    themeMode: localStorage.getItem('theme'),
}

export const themeSlicer = createSlice({
    name: "theme",
    initialState,
    reducers: {
        darkTheme: (state) => {
            localStorage.setItem('theme', 'dark')
            state.themeMode = "dark"
        },
        lightTheme: (state) => {
            localStorage.setItem('theme', 'light')
            state.themeMode = 'light'
        }
    }
})

export const {darkTheme, lightTheme} = themeSlicer.actions

export default themeSlicer.reducer
