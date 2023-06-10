import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';

const initialState = {
    reviews: [],
};

export const getProductReviews = createAsyncThunk(
    'reviews/getProductReviews',
    async (id, { rejectWithValue, fulfillWithValue }) => {
        try {
            const reviews = await api.getReviewsByID(id);
            return fulfillWithValue(reviews);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addReview = createAsyncThunk(
    'reviews/addReview',
    async (data, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { reviews } = await api.addProductReviewByID(...data);
            return fulfillWithValue(reviews);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteReview = createAsyncThunk(
    'reviews/deleteReview',
    async (data, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { reviews } = await api.deleteProductReviewByID(...data);
            return fulfillWithValue(reviews);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const reviewsSlice = createSlice({
    name: 'reviewsSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProductReviews.fulfilled, (state, { payload }) => {
            state.reviews = payload.reverse();
        });

        builder.addCase(addReview.fulfilled, (state, { payload }) => {
            state.reviews = payload.reverse();
        });

        builder.addCase(deleteReview.fulfilled, (state, { payload }) => {
            state.reviews = payload.reverse();
        });
    },
});

export default reviewsSlice.reducer;
