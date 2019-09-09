import React, { Component } from 'react';
import App from './App';
import './header.css';

class Header extends Component {
   

    render() {

        const headerTitle = this.props.title;

        return <div id='container'>
            <div id='header'>
        <h1>Steven Lawless - {headerTitle}</h1>    
    </div>
    </div>;
    }
};

export default Header;