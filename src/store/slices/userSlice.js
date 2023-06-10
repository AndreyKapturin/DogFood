import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from './../../api/api';
import { isError, isLoading } from '../../utilities/utilities';

const initialState = {
    user: {},
    isAuth: false,
    loading: false,
};

export const authorization = createAsyncThunk(
    'user/authorization',
    async (data, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await api.signIn(data);
            return fulfillWithValue(response);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const registration = createAsyncThunk(
    'user/registration',
    async (data, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await api.signUp(data);
            return fulfillWithValue(response);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getTokenForNewPassword = createAsyncThunk(
    'user/getTokenForNewPassword',
    async (data, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await api.getTokenByEmail(data);
            return fulfillWithValue(response);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const sendNewPassword = createAsyncThunk(
    'user/sendNewPassword',
    async (data, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await api.setNewPassword(data);
            return fulfillWithValue(response);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getUserInfoByToken = createAsyncThunk(
    'user/getUserInfoByToken',
    async (data, { rejectWithValue, fulfillWithValue }) => {
        try {
            const user = await api.getUserInfo();
            return fulfillWithValue(user);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const sendNewUserInfo = createAsyncThunk(
    'user/sendNewUserInfo',
    async (newUserInfo, { getState, rejectWithValue, fulfillWithValue }) => {
        const { user } = getState();
        if (newUserInfo.avatar !== user.user.avatar) {
            try {
                const updatedUserInfo = await api.editUserInfo({
                    name: newUserInfo.name,
                    about: newUserInfo.about,
                });
                const updatedUserAvatar = await api.editUserAvatar({ avatar: newUserInfo.avatar });
                const updatedUser = { ...updatedUserInfo, avatar: updatedUserAvatar.avatar };
                return fulfillWithValue(updatedUser);
            } catch (error) {
                return rejectWithValue(error);
            }
        } else {
            try {
                const updatedUserInfo = await api.editUserInfo({
                    name: newUserInfo.name,
                    about: newUserInfo.about,
                });
                return fulfillWithValue(updatedUserInfo);
            } catch (error) {
                return rejectWithValue(error);
            }
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, { payload }) {
            state.isAuth = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authorization.fulfilled, (state, { payload }) => {
            state.isAuth = true;
            localStorage.setItem('DodFood_token_AK', payload.token);
            alert(`Добро пожаловать, ${payload.data.name}`);
        });

        builder.addCase(registration.fulfilled, () => {
            alert(`Регистрация прошла успешно}`);
        });

        builder.addCase(getUserInfoByToken.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        });

        builder.addCase(sendNewUserInfo.fulfilled, (state, action) => {
            state.user = action.payload;
        });

        builder.addCase(getTokenForNewPassword.fulfilled, (state, { payload }) => {
            alert(`${payload.message}`);
        });

        builder.addCase(sendNewPassword.fulfilled, (state, { payload }) => {
            localStorage.setItem('DodFood_token_AK', payload.token);
            alert(`Добро пожаловать, ${payload.data.name}`);
        });

        builder.addMatcher(
            ((action) => isLoading(action, 'user/')),
            (state) => {
                state.loading = true;
            }
        );

        builder.addMatcher(isError, (state, { payload }) => {
            alert(`${payload}`);
        });
    },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;
