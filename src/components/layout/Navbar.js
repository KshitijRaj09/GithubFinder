import React from 'react';
import PropTypes from 'prop-types';


const Navbar = ({title, icon}) =>{       
        return (
            <nav className="bg-primary navbar">
               <h1><i className={icon}></i> {title}</h1> 
            </nav>
        )
    }

Navbar.propTypes ={
    title : PropTypes.string.isRequired,
    icon  : PropTypes.string.isRequired
};

Navbar.defaultProps ={
    title:'Github Finder',
    icon: 'fab fa-github-square'
};


export default Navbar;
