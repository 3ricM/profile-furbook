import React, { Component } from 'react';
import pic from './images/takota.png'
import './css/picture-box.css'


const PictureBox = () => {
    return (
      <div className='PictureBox'>
          <img src={pic} class="pic" />


      </div>
    );
}

export default PictureBox
