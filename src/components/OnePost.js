import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const OnePost = () => {

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
        <div>
            <div className='allposts'>
                <div className="posts position-relative">
                    <div className="post1">
                        <img src={singlePost.thumbnail} className="img1" />
                    </div>
                    <div style={{ margin: "30px" }}>
                        <div className="position-absolute top-100 start-50 translate-middle post-d">
                            <div style={{ padding: "20px", backgroundColor: "#D1D1D1" }}>
                                <i className="bi bi-person"> {singlePost.author} /  </i>
                                <i className="bi bi-eye"> {singlePost.views} /  </i>
                                <i className="bi bi-calendar-event"> {singlePost.date} /  </i>
                                <i className="bi bi-tags"> {singlePost.tags}</i>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{marginLeft: "60px", marginRight: "60px"}}>{singlePost.excerpt}</p>
            </div>
        </div>
    )
};

export default OnePost;
