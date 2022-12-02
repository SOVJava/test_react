import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

export let localStorage = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjcwMTAxMjAwfQ.wV4ZKYqN2yItjzOAU845O__r2ffhQETyxT4hh6rR567empKQOdgL2EHBpDfAVqBSV0rw3kzvF50SYDFvb9aJSA',
        'Content-Type': 'application/json',
    }
}

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;