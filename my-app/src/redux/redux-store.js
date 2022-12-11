import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddlewar from "redux-thunk";

// export let localStorage = {
//     headers: {
//         Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjcxOTE1NjAwfQ._xPLSHYl5EpgEcokwxOouoiurozG2s2EMUZsEOtGAZ01cLrrrAak35SBfFtBaDBqwHHli0wgYw3G55UwRYMGxw',
//         'Content-Type': 'application/json',
//     }
// }

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewar));
// let store = createStore(reducers);

window.store = store;

export default store;