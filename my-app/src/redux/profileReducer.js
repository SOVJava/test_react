const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

let initialState = {
    postData: [
        {message: "It is my first post", likeCount: "2", id: 2},
        {message: "Hi, haw are you?", likeCount: "11", id: 1}
    ],
    newPostText: 'new Post))'}


const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST:{
            let countPosts = state.postData.length;
            let inputText = state.newPostText;
            let newItem = {message: inputText, likeCount: "0", id: (countPosts+1)};
            return{
                ...state,
                postData: [newItem, ...state.postData],
                newPostText: ''
            }
        }
        case UPDATE_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = ()=>({type: ADD_POST})
export const updatePostTextActionCreator = (text)=>({type: UPDATE_POST_TEXT, newText: text})