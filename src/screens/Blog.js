import React from 'react';
import '../App.css';

import Comments from '../components/Comments';
import Posts from '../components/Posts';

const Blog = () => {

    return (
        <div >
            <header className='header'>
                <h1>Our latest Posts</h1>
            </header>
            <div className='row' style={{maxWidth: "100%"}}>
                <div className='col-8'>
                    <Posts />
                </div>
                <div className='col-4 my-3 hhh'>
                    <Comments />
                </div>
            </div>
         </div>
    )
};

export default Blog;
