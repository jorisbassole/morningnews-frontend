import { createSlice } from '@reduxjs/tolkit';

const initialState = {
    value: [],
};

export const hiddenarticleSlice = createSlice({
    name: 'hiddenArticle',
    initialState,
    reducers: {
        hidearticle: (state, action) => {
            state.value.push(action.payload);
        },

        showarticle: (state, action) => {
            state.value = []
        },

    },
});

export const {hidearticle, showarticle} = hiddenarticleSlice.actions;
export default hiddenarticleSlice.reducer;
