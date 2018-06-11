import React from 'react';

const Likes = (props) => {
    let heart;
    if (props.like) {
        heart = <i className="fas fa-heart liked"></i>;
    } else {
        heart = <i className="fas fa-heart"></i>;
    }
    return (
        <div>
            <a href="#" onClick={props.toggleLike}>{heart}</a> {props.likes}
        </div>
    );
};

export default Likes;