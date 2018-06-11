import React, { Component } from 'react';

class Comment extends Component {
    state = {
        newComment: this.props.newComment,
        inEdition: false,
        commentBody: this.props.body
    }
    render() {
        let commentView;
        let button;
        if (!this.state.inEdition) {
            commentView = <p>{this.props.body + this.props.id}</p>;
            button = <button className="btn btn-info" onClick={this._editComment.bind(this)}><i className="fas fa-pencil-alt"></i></button>;
        } else {
            commentView = 
                <textarea type="text" defaultValue={this.state.commentBody + this.props.id}
                onChange={(event) => this.setState({
                    commentBody: event.target.value
                })} 
                rows="3"></textarea>;
            button = <button className="btn btn-success" onClick={this._saveEdition.bind(this)}><i className="far fa-save"></i></button>;
        }
        let edited;
        if (this.props.edited) {
            edited = <p className="text-success font-italic">Edited</p>;
        }
        return (
            <div>
                <h5>{this.props.author + this.props.id}</h5>
                {commentView}
                {edited}
                <div className="btn-group btn-group-sm">
                    {button}
                    <button className="btn btn-danger" onClick={() => this.props.deleteComment(this.props.comment)}><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        );
    }
    _editComment() {
        this.setState({
            inEdition: true
        });
    }

    _saveEdition() {
        this.props.saveEditedComment(this.props.comment, this.state.commentBody);
        this.setState({
            inEdition: false
        });
    }
}

export default Comment;