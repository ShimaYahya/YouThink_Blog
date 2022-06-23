import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(2)
    const [totalPages, setTotalPages] = useState([""]);
    const [loading, setLoading] = useState(false);

    const loadMore = () => {

        setLoading(true)
        setPage(page + 1)

        fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${page}`)
            .then(response => response.json())
            .then(data => {
                if (page < 5) {
                    setPosts([...posts, ...data.data])
                    setLoading(false);
                } else {
                    document.getElementById("LoadMore").style.display = "none";
                    setLoading(false);
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch(`https://www.wp-course.site/wp-json/youthink/posts`)
            .then(response => response.json())
            .then(data => {
                setPosts(data.data)
                console.log("hfbhbhv", data.data)
            })
            .catch(error => console.log(error))
    }, [!posts])

    return (
        <div>
            <div className='allposts' >
                {
                    posts.map((posts, i) => {
                        return (<Link to={`/blog/${posts.slug}`} style={{ textDecoration: 'none', color: "black" }}>
                            <div className="posts position-relative">
                                <div className="post1" key={i}>
                                    <img src={posts.thumbnail} className="img1" />
                                    <div className="position-absolute top-100 start-50 translate-middle post-d">

                                        <h5>{posts.title}</h5>

                                        <p>{posts.excerpt}</p>
                                        <div>
                                            <i className="bi bi-eye"> {posts.views} /  </i>
                                            <i className="bi bi-calendar-event"> {posts.date} /  </i>
                                            <i className="bi bi-tags"> {posts.tags}</i>
                                        </div>
                                    </div>
                                </div>
                            </div></Link>
                        )
                    })
                }
                {totalPages !== page &&
                    <button className="btn-loadmore" id="LoadMore"
                        onClick={loadMore} >
                        {loading ? 'Loading...' : 'Load More'}
                    </button>
                }
            </div>
        </div>
    )
};

export default Posts;
