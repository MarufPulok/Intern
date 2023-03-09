const {createStore, applyMiddleware} = require('redux')
const {default:logger} = require('redux-logger')

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

const initialProductState = {
    products: ["sugar", "milk"],
    count: 2
}

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        
        case ADD_PRODUCT:
            return {
               products: [...state.products, action.payload],
               count: state.count + 1
            }
        
        default:
            return state
    }
}

const store = createStore(productReducer, applyMiddleware(logger))

store.dispatch(getProducts())
console.log(store.getState())
store.dispatch(addProduct("butter"))
console.log(store.getState())
