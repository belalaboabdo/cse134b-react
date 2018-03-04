import React from 'react';
import "./AboutPage.css";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Community</h1>
        <p>Chat with other gamers below!</p>
        <div className="panel panel-default">
        </div>
        <div className="panel panel-default post-editor">
          <div className="panel-body">
            <textarea className="form-control post-editor-input"/>
            <button className="btn btn-success post-editor-button">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
