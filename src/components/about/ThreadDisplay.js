import React, {Component} from 'react';
import Post from "./Post.js";
import PostEditor from "./PostEditor.js";

class ThreadDisplay extends Component{
    constructor(props)  {
        super(props);
    
        this.addPost = this.addPost.bind(this);
    
        this.state = {
          posts: [],
          postUsers: []
        };
    }

    addPost(newUser, newPostBody) {
        const newState = Object.assign({}, this.state); // Look into Object.assign()
        newState.postUsers.push(newUser);
        newState.posts.push(newPostBody);
        this.setState(newState);
      }

    render() {
        return (
            <div>
                <div className="panel panel-default thread">
                    <div className="panel-body">
                        <h1>Community</h1>
                        <p>Log in and post below!</p>
                        { 
                            this.state.posts.map((postBody, idx) => {
                                return (
                                    this.state.postUsers.map((userName, idx2) => {
                                        return  (
                                            <Post key={idx} postBody={postBody} userName={userName}/>
                                        );
                                    })
                                );
                            })
                        }
                        <PostEditor addPost={this.addPost}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThreadDisplay;