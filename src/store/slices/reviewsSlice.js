import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api/api';

const initialState = {
    reviews: [],
};

export const getProducrReviews = createAsyncThunk('reviews/getProductReviews', async (id) => {
    const reviews = await api.getReviewsByID(id);
    return reviews;
});

export const addReview = createAsyncThunk('reviews/addReview', async (data) => {
    const {reviews} = await api.addProductReviewByID(...data);
    return reviews;
});

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (data) => {
    const {reviews} = await api.deleteProductReviewByID(...data);
    return reviews;
});

const reviewsSlice = createSlice({
    name: 'reviewsSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducrReviews.fulfilled, (state, { payload }) => {
            state.reviews = payload.reverse();
        });
        builder.addCase(addReview.fulfilled, (state, { payload }) => {
            state.reviews = payload.reverse();
        });
        builder.addCase(deleteReview.fulfilled, (state, { payload }) => {
            state.reviews = payload.reverse()
        });
    },
});


export default reviewsSlice.reducer;