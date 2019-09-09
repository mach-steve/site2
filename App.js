import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';


import Header from "./header";
import Navbar from './navbar';
import Music from './music';

import Home from './home';
import Content from './content';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "Home"};
    this.changePage = this.changePage.bind(this);
  }

 changePage(newtitle) {
   this.setState({title: newtitle});
 }

  render() {
 
  const pageTitle = this.state.title;
 

  return <div className="app">
      <Header title={pageTitle} />
      <Navbar onClick={this.changePage}/>
      <Content title={pageTitle}/>
    </div>;
}
}

export default App;
