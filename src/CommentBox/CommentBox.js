import React, { Component } from 'react';
import photos from '../Data/fakeData';
import Comment from './Comment/Comment';
import CommentForm from './CommentForm/CommentForm';

class CommentBox extends Component {
    state = {
        showComments: false,
        comments: photos[this.props.photoId-1].comments,
        newCommentToShow: false
    }
    render() {
        const comments = this._getComments(this.props.photoId);
        let commentNodes;
        let buttonText;
        let buttonIcon;
        let disabled;
        let newComment;

        if (this.state.comments.length === 0) {
            buttonText = "You have no comments.";
            buttonIcon = "";
            disabled = true;
        }
        
        if (this.state.comments.length > 0) {
        
            if (this.state.showComments) {
                buttonText = "Hide comments";
                buttonIcon = <i className="fas fa-angle-up"></i>;
                commentNodes = <ul className="list-group">{comments}</ul>
            }
            
            if (!this.state.showComments) {
                buttonText = "Show comments";
                buttonIcon = <i className="fas fa-angle-down"></i>;

                if (this.state.newCommentToShow) {
                    newComment = comments[comments.length - 1];
                    buttonText = "Show all comments";

                    if (this.state.comments.length === 1) {
                        buttonText = "You have one new comment";
                        buttonIcon = "";
                        disabled = true;
                    }
                }
            }
        
        }
        return (
            <div className="card">
                <h4 className="card-header"><i className="fas fa-align-right"></i> Comments ({comments.length})</h4>
                <button className="btn" onClick={this._showComments.bind(this)} disabled={disabled}>{buttonText} {buttonIcon}</button>
                {commentNodes}
                {newComment}
                <CommentForm addComment={this._addComment.bind(this)}/>
            </div>
        );
    }

    _getComments(i) {
        return this.state.comments.map((comment) => {
            return (
                <li className="list-group-item" key={comment.id}>
                    <Comment 
                        newComment={this.state.newCommentToShow}
                        comment={comment}
                        key={comment.id}
                        id={comment.id}
                        author={comment.author}
                        body={comment.body}
                        edited={comment.edited}
                        deleteComment={this._deleteComment.bind(this)}
                        saveEditedComment={this._saveEditedComment.bind(this)}
                    />
                </li>
            );
        });
    }

    _showComments() {
        if (this.state.comments.length === 0) { return; }
        this.setState({
            showComments: !this.state.showComments,
            newCommentToShow: false
        });
    }

    _addComment(author, body) {
        const newComment = {
            id: this.state.comments.length + 1,
            author,
            body
        }
        this.setState(prevState => ({
            comments: prevState.comments.concat([newComment]),
            newCommentToShow: true
        }));
    }

    _deleteComment(comment) {
        const comments = [...this.state.comments];
        const commentIndex = comments.indexOf(comment);
        comments.splice(commentIndex, 1);
        this.setState({
            comments,
            newCommentToShow: false
        });
    }

    _saveEditedComment(comment, newBody) {
        if (newBody === comment.body) { return; }
        const editedComment = {
            id: comment.id,
            author: comment.author,
            body: newBody,
            edited: true
        }
        const comments = [...this.state.comments];
        const commentIndex = comments.indexOf(comment);
        comments.splice(commentIndex, 1, editedComment);
        this.setState({comments});
    }
    
}

export default CommentBox;