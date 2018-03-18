import React, {Component} from 'react';
import Post from "./Post.js";
import PostEditor from "./PostEditor.js";

class ThreadDisplay extends Component{
    constructor(props)  {
        super(props);
    
        this.addPost = this.addPost.bind(this);
    
        this.state = {
          posts: ["first", "second", "second"],
          postUsers: ["Belal", "Najeeb", "David"]
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
                        <h1>FIRST LAST</h1>
                        <p>Come check out my page below!</p>
                        {
                            this.state.posts.map((postBody, idx) => {
                                return (
                                    <Post key={idx} userName={this.state.postUsers[idx]} postBody={postBody}/>
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