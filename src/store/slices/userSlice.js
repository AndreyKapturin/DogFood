import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from './../../api/api';

const initialState = {
    user: {},
};

export const getUserInfoByToken = createAsyncThunk('user/getUserInfoByToken', async () => {
    const user = await api.getUserInfo();
    return user;
});

export const sendNewUserInfo = createAsyncThunk(
    'user/sendNewUserInfo',
    async (newUserInfo, { getState }) => {
        const { user } = getState();
        if (newUserInfo.avatar !== user.user.avatar) {
            const updatedUserInfo = await api.editUserInfo({
                name: newUserInfo.name,
                about: newUserInfo.about,
            });
            const updatedUserAvatar = await api.editUserAvatar({ avatar: newUserInfo.avatar });
            const updatedUser = { ...updatedUserInfo, avatar: updatedUserAvatar.avatar };
            return updatedUser;
        } else {
            const updatedUserInfo = await api.editUserInfo({
                name: newUserInfo.name,
                about: newUserInfo.about,
            });
            return updatedUserInfo;
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserInfoByToken.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(sendNewUserInfo.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});

export default userSlice.reducer;
