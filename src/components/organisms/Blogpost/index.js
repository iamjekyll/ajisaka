import React from 'react';
import axios from 'axios';
// import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

class Blogpost extends React.Component {
    state = {
        posts: []
    };
    componentDidMount() {
        axios.get("https://www.ajisaka.co/wp-json/wp/v2/posts")
        .then(response => {
          const posts = response.data;
          this.setState({ posts });
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        const { posts } = this.state;
        return (
            <React.Fragment>
                <div className="py-10">
                    <div className="text-4xl text-center font-extrabold text-gray-900 sm:text-5xl md:text-6xl py-8">
                        <h2 className="blogk xl:inline">Blog</h2>
                    </div>
                    <div className="w-full flex md:flex-col">
                        {posts.length ? (
                            <div className="flex flex-wrap px-6 justify-evenly">
                                {posts.map(post => (
                                    <Link to={`/post/${post.slug}`}>
                                    <div key={post.id} class="flex-1 break-all md:break-all max-w-2xl rounded overflow-hidden shadow-lg my-2 px-6 py-4">
                                        <div class="text-xl font-semibold mb-2 text-shadow">{ renderHTML(post.title.rendered) }</div>
                                        <div className="divide-dashed"></div>
                                        <p class="text-grey-darker text-center text-xs">
                                        { renderHTML(post.excerpt.rendered) }
                                        </p>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        ): ''}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Blogpost
