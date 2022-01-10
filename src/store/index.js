// CreateStore function from redux
import {createStore} from 'redux';

// A function that gets existing state as a first arg and then the action dispatched as a second arg
// setting a default value for the first run
const counterReducer = (state = {counter: 0}, action) => {
    // I want to handle different dispatched actions here
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1;
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1;
        }
    }

    // If neither of the above matched, I will return the unchanged state
    return state;

};

// Calling the createStore() function that wants a pointer to a reducer function as a parameter
const store = createStore(counterReducer);

export default store;