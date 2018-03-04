import React, {Component} from 'react';
import Post from "./Post.js";
import PostEditor from "./PostEditor.js";

class ThreadDisplay extends Component{
    constructor(props)  {
        super(props);
    
        this.addPost = this.addPost.bind(this);
    
        this.state = {
          posts: ['Hello', 'My', 'App']
        };
    }

    addPost(newPostBody) {
        const newState = Object.assign({}, this.state);
        newState.posts.push(newPostBody);
        this.setState(newState);
      }

    render() {
        return (
            <div>
                <h1>Community</h1>
                <p>Chat with other gamers below!</p>
                { 
                    this.state.posts.map((postBody, idx) => {
                        return  (
                            <Post key={idx} postBody={postBody}/>
                        );
                    })
                }
                <PostEditor addPost={this.addPost}/>
            </div>
        );
    }
}

export default ThreadDisplay;