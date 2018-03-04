import React from 'react';
import PropTypes from 'prop-types';
import "./Post.css";

const Post = (props) => (
  <div className="panel panel-default post-body">
    <div className="panel-body">
      {props.postBody}
    </div>
  </div>
);

Post.propTypes = {
  postBody: PropTypes.string
};

export default Post;