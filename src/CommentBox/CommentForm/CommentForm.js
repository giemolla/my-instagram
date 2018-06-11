import React, { Component } from 'react';

class CommentForm extends Component {
    state = {
        commentAuthor: '',
        commentBody: ''
    }
    render() {
        return (
            <div className="card-header">
                <h4>Dodaj komentarz</h4>
                <form onSubmit={this._handleSubmit.bind(this)}>
                    <div className="form-groups">
                        <input type="text"
                                placeholder="Imię"
                                className="form-control"
                                value={this.state.commentAuthor}
                                onChange={(event) => this.setState({commentAuthor: event.target.value})}/>
                        <textarea  className="form-control" 
                                rows="4"
                                value={this.state.commentBody}
                                onChange={(event) => this.setState({commentBody: event.target.value})}
                                placeholder="Treść komentarza..." >
                        </textarea>
                        <button type="submit" className="btn btn-info">Dodaj</button>
                    </div>
                </form>
            </div>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this.state.commentAuthor, this.state.commentBody);
        this.setState({
            commentAuthor: "",
            commentBody: ""
        });
    }
}

export default CommentForm;