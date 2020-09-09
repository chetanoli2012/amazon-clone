export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
}

const reducer = (state, action) => {
    console.log('action', action);
    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }

}

export default reducer;