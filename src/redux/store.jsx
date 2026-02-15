import {configureStore} from '/@reduxjs/toolit'
    import feedbackReducer from '/feedbackSlice'

    export const store = configureStore({
        reducer : {
            feedback : feedbackReducer,
        },
    });