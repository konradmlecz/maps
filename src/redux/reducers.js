export function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            state.isAuth = true;
            return state;
        case "LOGOUT":
            state.isAuth = false;
            return state;
        default:
            return state;
    }
}