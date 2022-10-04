import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    categories: [],
    isLoading: false,
    error: null
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{
        getCategoriesStart:(state) => {
            state.isLoading = true
        },
        getCategoriesSuccess:(state, action) => {
            state.categories = action.payload
            state.isLoading = false
        },
        getCategoriesFailure:(state) => {
            state.isLoading = false
        },
    }

})


export const { getCategoriesStart, getCategoriesSuccess, getCategoriesFailure } = categorySlice.actions;

export default categorySlice.reducer;