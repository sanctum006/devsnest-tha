import React, { useState } from 'react';
import { IPostType } from "../App";

const Post = ({ post }: { post: IPostType }) => {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <div className="card post">
            <div className="card-header">
                <div className="card-sub-header">
                    <div className='card-img'>
                        <img src="" alt=""/>
                    </div>
                    <h5 className="card-tittle">Sanctum007 
                <i className="bi bi-three-dots"/></h5>

                </div>
            </div>
            <img src="http://i.imgur.com/VzEhqoJ.jpg" className="card-img-top post-img" alt="..."/>
            <div className="buttons">
                <i
                    className={!isLiked ? "bi bi-heart" : "bi bi-heart-fill liked"}
                    onClick={() => {
                        setIsLiked(!isLiked)
                    }}
                />
                <i className="bi bi-chat"/>
                <i className="bi bi-share"/>
            </div>
        </div>
    );
};

export default Post;
