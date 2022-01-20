function cartReducer(state = {
    cartItems: {}
}, action) {
    switch (action.type) {
        case 'UPDATE':
            return {
                cartItems: {
                    ...state.cartItems,
                    ...action.payload
                }
            }

            default:
                return state
    }
}

export default cartReducer;