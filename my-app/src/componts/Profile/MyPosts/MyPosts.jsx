import React from 'react';
import css from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let textPost = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onChangeTextArea = () =>{
        let text = textPost.current.value;
        props.changeTextArea(text);
    }

    let postElement = props.posts
        .map( postEl =>  <Post message={postEl.message} likeCount={postEl.likeCount}/>);

    return (
        <div className={css.content}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={textPost}
                                  onChange={onChangeTextArea} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={css.posts}>
                    {postElement}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;