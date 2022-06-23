import React, { useEffect, useState } from 'react';
import '../App.css';

const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("https://www.wp-course.site/wp-json/wp/v2/comments")
            .then(response => response.json())
            .then(data => {
                setComments(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="comments">
            <div className="list-group-item comment">
                <h2>Lateset Comments</h2>
            </div>
            {
                comments.map((comments, i) => {
                    return (<div className="list-group-item comment" key={i}>
                        <div className="row" >
                            <div className="col-auto">
                                <img src={comments.author_avatar_urls[24]} width="60" className='IMG1' />
                            </div>
                            <div className="col ms-n3 pt-2 text-sm text-gray-800">
                                <h5 className="text-dark">{comments.author_name}</h5>
                                <div dangerouslySetInnerHTML={{ __html: comments.content.rendered }} />
                                <div className="text-gray-500 small">{comments.date}</div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )

}

export default Comments;
