import c from "./Post.module.css";
import React from "react";

const Post = () => {
    return (
            <div className={c.item}>
                <img src='https://www.1zoom.ru/big2/946/289597-frederika.jpg' />
                Post 1
                <div>
                    <span>like</span>
                </div>
            </div>
      )
}
export default Post;