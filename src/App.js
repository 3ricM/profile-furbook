import React, { About } from 'react';
import PetNav from './components/pet-nav';
import PictureBox from './components/picture-box';
import AboutBox from './components/about-box';
import Posts from './components/post'
import './App.css';

const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <PetNav/>
        <div class="container">
          <div class="row">
            <PictureBox/>
            <AboutBox/>
            <h3>Takota McConnner</h3>
            "Laziness is nothing more than the habit of resting before you get tired." - Jules Renard
          </div>
          <div class="row">
            <Posts/>
          </div>
        </div>
      </div>
    )
  }

  return component
}

export default App;
