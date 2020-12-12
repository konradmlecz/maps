import { createStore } from "redux";
import { reducer } from "./reducers"

const initialState = {
    isAuth: false,
    isLoading: true,
};

export default createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

