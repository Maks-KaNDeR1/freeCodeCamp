// 1 
const reducer = (state = 5) => {
    return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer)

// 2
const store = Redux.createStore(
    (state = 5) => state
);

let currentState = store.getState();

// 3 
const action = {
    type: 'LOGIN'
}

function actionCreator() {
    return action
}

