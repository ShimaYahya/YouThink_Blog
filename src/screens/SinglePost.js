import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

import Comments from '../components/Comments';
import OnePost from '../components/OnePost';

const SinglePost = () => {

    const [singlePost, setSinglePost] = useState([])
    const { slug } = useParams();

    useEffect(() => {
        fetch(`https://www.wp-course.site/wp-json/youthink/post?slug={${slug}}`)
            .then(response => response.json())
            .then(data => {
                setSinglePost(data.data)
            })
            .catch(error => console.log(error))
    }, [!singlePost]);

    return (
        <div >
            <header className='header'>
                <h1>{singlePost.title}</h1>
            </header>
            <div className='row' style={{maxWidth: "100%"}}>
                <div className='col-8'>
                    <OnePost />
                </div>
                <div className='col-4 my-3'>
                    <Comments />
                </div>
            </div>
        </div>
    )

};

export default SinglePost;
