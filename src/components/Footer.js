import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "../App.css"

const Footer = () => {

    const emailRef = useRef(null);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(true);

    const postEmail = () => {

        const email = emailRef.current.value

        fetch(
            `https://www.wp-course.site/wp-json/youthink/subscribe`,
            {
                method: "post",
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                setMessage(data.message)
                setSuccess(data.success)
            }).catch(e => e)
        }

    return (
        <div className="container footer-1">
            <footer className="py-5">
                <div className="row footer">
                    <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Features</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Pricing</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >FAQs</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Features</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Pricing</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >FAQs</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Features</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >Pricing</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >FAQs</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link to="/" className="nav-link p-0 text-muted" >About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 offest-1">
                        <form>
                            <h5>Subscribe to our newslettar</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-100 gap-2">
                                <label htmlFor="newslstter1" className="visually-hidden">Email address</label>
                                <input id="newslstter1" className="form-control" placeholder='Email address' type="email" ref={emailRef} />
                                <button className="btn btn-primary" type="button" onClick={postEmail}>Subscribe</button>
                            </div>
                            {success ? <p style={{ color: "green" }}>{message}</p> : <p style={{ color: "red" }}>{message}</p>}
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p>© 2021 Company, Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
};

export default Footer;
