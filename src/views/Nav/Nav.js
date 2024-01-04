import React from "react";
import './Nav.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

class Nav extends React.Component {


    render() {
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/todo" activeClassName="active">
                        To do
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/user" activeClassName="active">
                        User
                    </NavLink>
                </div >
            </>
        );
    }

}

export default Nav
