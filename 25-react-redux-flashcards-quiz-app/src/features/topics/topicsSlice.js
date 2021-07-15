import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            '1': {
                id: 1,
                name: 'Mixed',
                icon: undefined,
                quizIds: []
            }
        }  /* structure:     topics: {
            '123': {
              id: '123',
              name: 'example topic',
              icon: 'icon url',
              quizIds: ['456']
            } */
    },
    reducers: { //actions for this slice
        //expect the payload for this action to look like {id: '123456', name: 'name of topic', icon: 'icon url'}
        addTopic: (state, action) => {      
            state.topics[action.payload.id] = {...action.payload, quizIds: []};
        },
        //action will receive a payload of the form {quizId: '123', topicId: '456'}
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
});

export const selectTopics = (state) => state.topics.topics; // access from overall app state!
//console.log(topicsSlice);
export const { addTopic, addQuizId } = topicsSlice.actions; // the action object creator, auto generated
export default topicsSlice.reducer;