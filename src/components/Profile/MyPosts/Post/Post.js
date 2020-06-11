import c from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return (
            <div className={c.item}>
                <img src='https://www.1zoom.ru/big2/946/289597-frederika.jpg' />
                {props.message}
                <div>
                    <span>likes {props.likes}</span>
                </div>
            </div>
      )
}
export default Post;