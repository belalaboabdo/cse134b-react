import React from 'react';

const Comment = (props) =>
{
  <div className="panel panel-default comment-body">
    <div className="panel-body">
      <input type="text" className="comment-name" value={props.userName} readOnly></input>
      <br></br>
      <br></br>
      {props.postBody}
    </div>
  </div>;
};

export default Comment;