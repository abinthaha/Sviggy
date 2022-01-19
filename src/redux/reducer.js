function cartReducer(state = {
    cartItems: 0
}, action) {
    switch (action.type) {
        case 'UPDATE':
            return {
                cartItems: action.payload
            }

        default:
            return state
    }
}

export default cartReducer;