//require redux
const redux = require('redux')

const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

const GET_CART_ITEMS = "GET_CART_ITEMS"
const ADD_CART_ITEM = "ADD_CART_ITEM"

const initialCartState = {
    cartItems: ["kacchi"],
    count: 1
}

const initialProductState = {
    products: ["sugar", "milk"],
    count: 2 
}

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

const getCartItems = () => {
    return {
        type: GET_CART_ITEMS
    }
}

const addCartItem = (cartItem) => {
    return {
        type: ADD_CART_ITEM,
        payload: cartItem
    }
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

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        
        case ADD_CART_ITEM:
            return {
               cartItems: [...state.cartItems, action.payload],
               count: state.count + 1
            }
        
        default:
            return state
    }
}

const rootReducer = redux.combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = redux.createStore(rootReducer)

store.dispatch(getProducts())
console.log(store.getState())

store.dispatch(addProduct("dddd"))
console.log(store.getState())

store.dispatch(getCartItems())
console.log(store.getState())

store.dispatch(addCartItem("butter"))
console.log(store.getState())




