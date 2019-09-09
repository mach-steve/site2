import React from 'react';



import Home from './home';
import Music from './music';

class Content extends React.Component {
    
    
    render() {
        if (this.props.title === "Music") {
            return <Music/>;
        } else {return <Home/>}
    }
};

export default Content;