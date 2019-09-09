import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './music.css';

class Music extends Component {
    render() {
       return <div className='musicContent'>
               <div id="mannyWrapper">
                <div id="withManny">WITH MANNY/FOLKU2</div>
                <div id="mannyPic"><img id="meAndManny" src="https://live.staticflickr.com/65535/48573061846_69fc9cc42e.jpg"></img></div>
                <div id="mannyContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit praesentium dolores maxime eos, soluta temporibus eligendi quisquam perspiciatis ut sequi ratione atque, tempora libero! In, dolorum modi nihil tempore repellendus ex enim molestiae accusamus maxime corporis facere quam, necessitatibus maiores asperiores rem magnam quia laboriosam nobis alias assumenda neque.</div>
               </div>
               <div id="bruceWrapper">
                <div id="withBruce">WITH BRUCE HELMAN</div>
                <div id="brucePic"><img id="meAndBruce" src="https://live.staticflickr.com/65535/48573229787_c10d96da79.jpg"></img></div>                
                <div id="bruceContent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, labore quibusdam fuga saepe aperiam sequi veniam nulla cupiditate obcaecati doloremque optio hic a corrupti pariatur eum dolor perferendis totam accusantium nemo. Illum possimus nobis iste eius qui nesciunt placeat doloribus optio consectetur consequuntur iure, modi, debitis totam quae autem accusamus!</div>
                </div>
            </div>
;
        ;
    }
};



export default Music;