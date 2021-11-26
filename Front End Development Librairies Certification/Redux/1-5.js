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

// 4 
const store = Redux.createStore(
    (state = { login: false }) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

store.dispatch(loginAction());

// 5 
const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    if (action.type == 'LOGIN') {
        return {
            login: true
        }
    }
    return state
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};