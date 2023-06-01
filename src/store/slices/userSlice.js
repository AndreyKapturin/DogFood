import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from './../../api/api';

const initialState = {
    user: {},
};

export const getUserInfoByToken = createAsyncThunk('user/getUserInfoByToken', async () => {
    const user = await api.getUserInfo();
    return user;
});

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserInfoByToken.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});


export default userSlice.reducer;