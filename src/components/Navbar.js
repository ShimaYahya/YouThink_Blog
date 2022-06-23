import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css"

const Navbar = () => {

    return (
        <div style={{ maxWidth: "100%" }}>
            <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/footer-logo.svg" alt="home" className="navbar-brand" />
                    </Link>
                    <div className="d-flex margin">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <h5 className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </h5>
                            <h5 className="nav-item">
                                <Link className="nav-link active" to="/blog">Blog</Link>
                            </h5>
                        </ul>
                    </div>
                </div>
            </nav >
        </div>
    )
};

export default Navbar;
