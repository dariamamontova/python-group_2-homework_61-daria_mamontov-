import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import './Layout.css';


class Layout extends Component {
    render() {
        return <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink to='/' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to='/about' className="nav-link">About us</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink to='/contacts' className="nav-link">Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children}
            <footer className="footer py-4 fixed-bottom">
                <div className="container">
                    <p>© 2015 JOB BOARD Landing Page By Mike Taylor</p>
                </div>
            </footer>
            </Fragment>
    }
}

export default Layout;