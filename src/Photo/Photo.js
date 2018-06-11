import React from 'react';

const Photo = (props) => {
    return (
        <div className="card">
            <img src={props.src} className="card-img-top" alt={props.text}/>
            <div className="card-body">
                <p className="card-title">{props.text}</p>
            </div>
        </div>
    );
};

export default Photo;