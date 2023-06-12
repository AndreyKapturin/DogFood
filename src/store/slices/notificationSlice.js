import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notifications: [],
};

const notificationsSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification(state, { payload }) {
            state.notifications.push({ ...payload, id: Math.random() });
        },

        removeNotification(state, { payload }) {
            const index = state.notifications.findIndex((e) => {
                return e.id === payload;
            });
            if (index < 0) return;
            state.notifications.splice(index, 1);
        },
    },
});

export const { addNotification, removeNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
