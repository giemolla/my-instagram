import React, { Component } from 'react';
import photos from '../Data/fakeData';
import './PhotoBox.css';
import Photo from '../Photo/Photo';
import Likes from '../Likes/Likes';
import CommentBox from '../CommentBox/CommentBox';

class PhotoBox extends Component {
    state = {
        likes: photos[this.props.id-1].likes,
        liked: false
    }
    render() {
        return (
            <div className="col-4">
                <div className="card" >
                    <Photo src={this.props.src} text={this.props.text + this.props.id}/>
                    <Likes likes={this.state.likes} toggleLike={this._toggleLike.bind(this)} like={this.state.liked}/>
                    <CommentBox photoId={this.props.id}/>
                </div>
            </div>
        );
    }

    _toggleLike() {
        this.setState({
            liked: !this.state.liked
        });
        if (!this.state.liked) {
            this.setState(prevState => ({
                likes: prevState.likes + 1
            }));
        } else {
            this.setState(prevState => ({
                likes: prevState.likes - 1
            }));
        }
    }
}

export default PhotoBox;