import React, {Component} from 'react';
import "./CommentEditor.css";
import PropTypes from 'prop-types';

class CommentEditor extends Component
{
  constructor()
  {
    super();
    this.state = {
      newUser: '',
      newCommentBody: ''
    };

    this.handleCommentEditorInputChange = this.handleCommentEditorInputChange.bind(this);
    this.handleCommentEditorNameChange = this.handleCommentEditorNameChange.bind(this);
    this.createComment = this.createComment.bind(this);
  }

  handleCommentEditorInputChange(ev) {
    this.setState({
      newCommentBody: ev.target.value
    });
  }

  handleCommentEditorNameChange(ev) {
    this.setState({
      newUser: ev.target.value
    });
  }

  createComment() {
    this.props.addComment(this.state.newUser, this.state.newCommentBody);
    this.setState({
        newCommentBody: '',
        newUser: ''
    });
  }

  render()
  {
    return (
      <div className="panel panel-default comment-editor">
        <div className="panel-body">
          Username: < input type="text" className="comment-editor-name" value={this.state.newUser} onChange={this.handleCommentEditorNameChange} />
          < textarea className="form-control comment-editor-input" value={this.state.newCommentBody} onChange={this.handleCommentEditorInputChange} />
          < button className="btn btn-sm comment-editor-button" onClick={this.createComment}>Submit</button>
        </div>
      </div>
    );
  }
}

CommentEditor.propTypes = {
  addComment: PropTypes.func
};

export default CommentEditor;