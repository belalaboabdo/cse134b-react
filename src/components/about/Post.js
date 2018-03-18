import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Post.css";
import Comment from "./Comment.js";
import CommentEditor from "./CommentEditor.js";

class Post extends Component
{

  constructor(props)  {
    super(props);

    this.addCommentEditor = this.addCommentEditor.bind(this);
    this.addComment = this.addComment.bind(this);

    this.state = {
      showCommentEditor: false,
      // userName: props.userName,
      // postBody: props.postBody,
      comments: [],
      commentUsers: []
    };
  }

  addCommentEditor(e) {
    // e.preventDefault();
    console.log("HI");
    const newState = Object.assign({}, this.state); // Look into Object.assign()
    newState.showCommentEditor = true;
    this.setState(newState);
  }

  addComment(newUser, newComment)
  {
    const newState = Object.assign({}, this.state);
    newState.showCommentEditor = false;
    newState.comments.push(newComment);
    newState.commentUsers.push(newUser);
  }

  render()
  {
    return(
      <div className="panel panel-default post-body">
        <div className="panel-body">
          <input type="text" className="post-name" value={this.props.userName} readOnly></input>
          {/* <h3>{this.props.userName}</h3> */}
          <br></br>
          <br></br>
          <div className="panel panel-default body">
            <div className="panel-body">
              {this.props.postBody}
            </div>
          </div>
          < button className="btn btn-sm comment-editor-button" onClick={this.addCommentEditor}>Comment</button>
          {this.state.showCommentEditor && <CommentEditor addComment={this.addComment}/>}
          {
            this.state.comments.map((commentBody, idx) => {
              return (
                <Comment key={idx} userName={this.state.commentUsers[idx]} commentBody={commentBody}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  userName: PropTypes.string,
  postBody: PropTypes.string
};

export default Post;