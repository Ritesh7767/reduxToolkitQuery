import { createSlice } from "@reduxjs/toolkit"
import fetchData from "./createAsyncThunk"

const initialState = {
    loading : false,
    error : false,
    data : []
}

const DataSlice = createSlice({
    name : 'data',
    initialState,
    reducers : {},
    extraReducers : builder => {
        builder
            .addCase(fetchData.pending, state => {
                state.loading = true
                console.log(state, 'loading')
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload
                console.log(state, 'fulfilled')
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
                console.log(state, 'error')
            })
    }
})

export default DataSlice.reducer