const { default: axios } = require('axios')
const {createStore, applyMiddleware} = require('redux')
const thunk = require('redux-thunk').default

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILURE = "GET_TODOS_FAILURE"
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

const initialToDoState = {
    todos: [],  
    isLoading: false,
    error: null
}

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}

const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}

const getTodosFailure = (error) => {
    return {
        type: GET_TODOS_FAILURE,
        payload: error
    }
}

const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest())
        axios.get(API_URL)
        .then(response => {
            const todos = response.data
            const titles = todos.map(todo => todo.title)
            dispatch(getTodosSuccess(titles))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(getTodosFailure(errorMsg))
        })
    }
}

const todosReducer = (state = initialToDoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        
        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(fetchData())

