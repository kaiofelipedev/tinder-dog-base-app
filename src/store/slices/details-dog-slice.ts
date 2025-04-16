import { createSlice } from '@reduxjs/toolkit';


export const DetailsDogSlice = createSlice({
    name: 'detailsDog',
    initialState: {
        details: {}
    },
    reducers: {
        setDetailsDog: (state, action) => {
            state.details = action.payload
        }
    }
})

export const {setDetailsDog} = DetailsDogSlice.actions
export default DetailsDogSlice.reducer