import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from './../../api/api';
import { isLoading } from '../../utilities/utilities';
import { addNotification } from './notificationSlice';

const initialState = {
    user: {},
    isAuth: false,
    loading: false,
};

export const authorization = createAsyncThunk(
    'user/authorization',
    async (data, { rejectWithValue, fulfillWithValue, dispatch }) => {
        try {
            const response = await api.signIn(data);
            dispatch(
                addNotification({
                    type: 'success',
                    message: `Добро пожаловать, ${response.data.name}`,
                })
            );
            return fulfillWithValue(response);
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

export const registration = createAsyncThunk(
    'user/registration',
    async (data, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await api.signUp(data);
            dispatch(addNotification({ type: 'success', message: 'Вы зарегистрированы' }));
            return fulfillWithValue(response);
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

export const getTokenForNewPassword = createAsyncThunk(
    'user/getTokenForNewPassword',
    async (data, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await api.getTokenByEmail(data);
            dispatch(addNotification({ type: 'success', message: response.message }));
            return fulfillWithValue(response);
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

export const sendNewPassword = createAsyncThunk(
    'user/sendNewPassword',
    async (data, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await api.setNewPassword(data);
            dispatch(
                addNotification({
                    type: 'success',
                    message: `Добро пожаловать, ${response.data.name}`,
                })
            );
            return fulfillWithValue(response);
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

export const getUserInfoByToken = createAsyncThunk(
    'user/getUserInfoByToken',
    async (data, { dispatch, rejectWithValue, fulfillWithValue }) => {
        try {
            const user = await api.getUserInfo();
            return fulfillWithValue(user);
        } catch (error) {
            dispatch(addNotification({ type: 'error', message: error }));
            return rejectWithValue(error);
        }
    }
);

export const sendNewUserInfo = createAsyncThunk(
    'user/sendNewUserInfo',
    async (newUserInfo, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
        const { user } = getState();
        if (newUserInfo.avatar !== user.user.avatar) {
            try {
                const updatedUserInfo = await api.editUserInfo({
                    name: newUserInfo.name,
                    about: newUserInfo.about,
                });
                const updatedUserAvatar = await api.editUserAvatar({ avatar: newUserInfo.avatar });
                const updatedUser = { ...updatedUserInfo, avatar: updatedUserAvatar.avatar };
                dispatch(
                    addNotification({
                        type: 'success',
                        message: `Данные изменены`,
                    })
                );
                return fulfillWithValue(updatedUser);
            } catch (error) {
                dispatch(addNotification({ type: 'error', message: error }));
                return rejectWithValue(error);
            }
        } else {
            try {
                const updatedUserInfo = await api.editUserInfo({
                    name: newUserInfo.name,
                    about: newUserInfo.about,
                });
                dispatch(
                    addNotification({
                        type: 'success',
                        message: `Данные изменены`,
                    })
                );
                return fulfillWithValue(updatedUserInfo);
            } catch (error) {
                dispatch(addNotification({ type: 'error', message: error }));
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
        });

        builder.addCase(getUserInfoByToken.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        });

        builder.addCase(sendNewUserInfo.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        });

        builder.addCase(sendNewPassword.fulfilled, (state, { payload }) => {
            localStorage.setItem('DodFood_token_AK', payload.token);
        });

        builder.addMatcher(
            (action) => isLoading(action, 'user/'),
            (state) => {
                state.loading = true;
            }
        );
    },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;
