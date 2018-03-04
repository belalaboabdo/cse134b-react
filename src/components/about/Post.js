import React from 'react';
import PropTypes from 'prop-types';
import "./Post.css";

const Post = (props) => (
  <div className="panel panel-default post-body">
    <div className="panel-body">
      <input type="text" className="post-name" value={props.userName} readOnly></input>
      <br></br>
      <br></br>
      {props.postBody}
    </div>
  </div>
);

Post.propTypes = {
  userName: PropTypes.string,
  postBody: PropTypes.string
};

export default Post;