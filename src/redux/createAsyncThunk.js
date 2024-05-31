import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk('data/fetchData', async () => {
    const result = await fetch('https://fakestoreapi.com/products')
    result = await result.json()
    console.log(result)
    return result
})

export default fetchData