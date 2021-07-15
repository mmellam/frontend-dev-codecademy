import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        //action will receive a payload of the form { id: '123', front: 'front of card', back: 'back of card'}
        addCard: (state, action) => {
            state.cards[action.payload.id] = {...action.payload};
        }
    }
});

export const selectCards = state => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;