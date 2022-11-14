import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state : {
        profilePage: {
            postData: [
                {message: "It is my first post", likeCount: "2", id: 2},
                {message: "Hi, haw are you?", likeCount: "11", id: 1}
            ],
            newPostText: 'new Post))'
        },
        messagePage:{
            dialogsData : [
                {dialogName : "Oleg", id : "1"},
                {dialogName : "Julia", id : "2"},
                {dialogName : "Grigory", id : "3"}
            ],
            messageData : [
                {message : "Hi", id : "1"},
                {message : "Hello", id : "2"},
                {message : "Oleg?", id : "3"}
            ],
            newMessageDialog:''
        }
    },
    _callSubscribe (){},
    getState(){
        return this._state
    },
    subscribe (observer) {
        this._callSubscribe = observer;
    },
    dispatch (action){
        let state = this.getState();
        this._state.profilePage = profileReducer(state.profilePage,action);
        this._state.messagePage = dialogsReducer(state.messagePage,action);

        this._callSubscribe(this._state);
    }
};

export default store;
