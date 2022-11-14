import React from 'react';
import css from './Post.module.css'


const Post = (props) => {
    return (
        <div>
            <div className={css.item}>
                <img src='https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg' />
                {props.message}
                <div>
                    <span>
                        <img className={`${css.item} ${css.like}`}
                             src='http://i.otzovik.com/objects/b/1070000/1062563.png'/>
                        {props.likeCount}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Post;