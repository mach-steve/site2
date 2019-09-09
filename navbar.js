import React, { Component } from 'react';
import './navbar.css';





class Navbar extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        
    }
    
    handleClick(e) {
        const newtitle = e.target.title;
       
        this.props.onClick(newtitle);
    }

    render() {

 
        return <div className="navbar">
        <div id='navitems'>
        <ul>
    <button title='Home' onClick={this.handleClick}>Home</button>
        <button title='Music' onClick={this.handleClick}>Music</button>
        <button>Contact</button> 
        
        </ul>
         </div>
         </div>;
        
    };
};

export default Navbar;