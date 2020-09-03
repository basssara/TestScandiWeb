import React from 'react';
import './App.css';
import Slider from './components/Slider';
import i1 from './img/i1.jpg';
import i2 from './img/i2.jpg';
import i3 from './img/i3.jpg';
import i4 from './img/i4.jpg';
import i5 from './img/i5.jpg';

const images = [
  i1,
  i2,
  i3,
  i4,
  i5
]

function App() {
  return (
    <div className="App">
   <Slider slides={images} />
    </div>
  );
}

export default App;
