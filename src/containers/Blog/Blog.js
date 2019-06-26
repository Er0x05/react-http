import React, { Component } from 'react';

import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Aux from '../../components/Hoc/AuxSupport';
import './Blog.css';

class Blog extends Component {
    
    state ={
        posts: [],
        selectedPostId: null
    }
    
    componentDidMount(){
        
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                const posts = res.data.slice(0,4).map(
                    post=>{return{...post,author:'Max'}}
                )
                this.setState({posts:posts});
            });

    };

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }
    
    render () {

        const posts = this.state.posts.map(post=>
            <Post 
                key={post.id}
                title={post.title} 
                author={post.author} 
                clicked={()=>this.postSelectedHandler(post.id)}
            />)

        return (
            <Aux>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <div>
                    <section className="Posts">
                        {posts}
                    </section>
                    <section>
                        <FullPost id={this.state.selectedPostId} />
                    </section>
                    <section>
                        <NewPost />
                    </section>
                </div>
            </Aux>
        );
    }
}

export default Blog;