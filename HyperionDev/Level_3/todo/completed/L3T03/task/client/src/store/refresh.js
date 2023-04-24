import { createSlice } from "@reduxjs/toolkit";

export const refreshSlice = createSlice({
    name:"refresh",

    initialState: {
        refreshCount: 0
    },

    reducers: {
        refreshGetReq: (state) => {
            state.refreshCount = state.refreshCount + 1
            console.log("REDUX REDUCER", state.refreshCount)

        }
    }
})

export const {refreshGetReq} = refreshSlice.actions
export default refreshSlice.reducer