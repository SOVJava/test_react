const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

let initialState = {
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
    newMessageDialog:''}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:{
            let countMessage = state.messageData.length;
            let inputText = state.newMessageDialog;
            let newItem = {message : inputText, id : (countMessage+1).toString()};
            return {
                ...state,
                messageData:[...state.messageData,newItem],
                newMessageDialog:''
            }
        }
        case UPDATE_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageDialog:action.newText
            }
        }
        default:
            return state;
    }
}

export const addMessageCreator = ()=>({type: ADD_MESSAGE})
export const updateNewMessageCreator = (text)=>({type: UPDATE_MESSAGE_TEXT, newText: text})

export default dialogsReducer;