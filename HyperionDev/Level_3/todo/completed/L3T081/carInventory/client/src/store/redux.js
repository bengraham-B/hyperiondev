import { createSlice } from "@reduxjs/toolkit"

export const reduxSlice = createSlice({
    name: "redux",

    initialState: {
        refreshCount: 0
    },

    reducers: {
        refresh: (state) => {
            state.refreshCount = state.refreshCount + 1
            console.log("REDUX REDUCER:", state.refreshCount)

        }
    }
})

export const { refresh } = reduxSlice.actions
export default reduxSlice.reducer