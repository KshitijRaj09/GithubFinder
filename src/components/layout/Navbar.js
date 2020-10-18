import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Navbar extends Component {
    static defaultProps ={
        title:'Github Finder',
        icon: 'fab fa-github-square'
    };
  

    render() {
        const {title, icon} = this.props;
        
        return (
            <nav className="bg-primary navbar">
               <h1><i className={icon}></i> {title}</h1> 
            </nav>
        )
    }


}

Navbar.propTypes ={
    title : PropTypes.string.isRequired,
    icon  : PropTypes.string.isRequired
};


export default Navbar;
