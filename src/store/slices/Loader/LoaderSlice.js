import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader: false
};

export const loaderSlice = createSlice({
    name: 'loaderSlice',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.loader = action.payload
        }
    },
})

export const { setLoader } = loaderSlice.actions

export default loaderSlice.reducer