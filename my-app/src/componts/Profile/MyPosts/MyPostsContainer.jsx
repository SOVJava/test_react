import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {addMessageCreator, updateNewMessageCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";

const MyPostsContainer = () => {

    return (<div></div>
        // <StoreContext.Consumer>{
        //     (store) => {
        //
        //         let state = store.getState().profilePage;
        //
        //         let addPost = () => {
        //             let action = addPostActionCreator()
        //             store.dispatch(action);
        //         };
        //
        //         let changeTextArea = (text) => {
        //             let action = updatePostTextActionCreator(text)
        //             store.dispatch(action)
        //         }
        //
        //         return <MyPosts changeTextArea={changeTextArea}
        //                         newPostText={state.newPostText}
        //                         addPost={addPost}
        //                         posts={state.postData}/>
        //     }
        // }</StoreContext.Consumer>
    );
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.postData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeTextArea: (value) => {
            let action = updatePostTextActionCreator(value)
            dispatch(action)
        },
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action);
        }
    }
}

export let SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;