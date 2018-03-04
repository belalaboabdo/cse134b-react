import React, {Component} from 'react';
import "./PostEditor.css";

class PostEditor extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            newUser: '',
            newPostBody: ''
        };

        this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
        this.handlePostEditorNameChange = this.handlePostEditorNameChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handlePostEditorInputChange(ev) {
        this.setState({
          newPostBody: ev.target.value
        });
    }

    handlePostEditorNameChange(ev) {
        this.setState({
          newUser: ev.target.value
        });
    }

    createPost() {
        this.props.addPost(this.state.newUser, this.state.newPostBody);
        this.setState({
            newPostBody: ''
        });
    }

    render() {
        return  (
            <div className="panel panel-default post-editor">
                <div className="panel-body">
                    Username: < input type="text" className="post-editor-name" value={this.state.newUser} onChange={this.handlePostEditorNameChange} />
                    < textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChange} />
                    < button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
                </div>
            </div>
        );
    }
}

export default PostEditor;