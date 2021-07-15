import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        //will receive a payload of the form { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {...action.payload};
            /*
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
              cardIds: cardIds,
              id: quizId,
              name: name,
              topicId: topicId
            }
            */
        }
    }
});

// payload is a quiz submitted through the form by the user through NewQuizForm
// a thunk action creator that dispatches 2 actions to the store, to the reducer - reducer handles it to update state
export const createQuiz = (payload) => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(payload));
        dispatch(addQuizId(payload));
        console.log(payload);
        console.log("quiz id at createquiz is : " + payload.id)
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;


//export stuff from returned object
export const { addQuiz } = quizzesSlice.actions; //action creator
export default quizzesSlice.reducer; // reducer