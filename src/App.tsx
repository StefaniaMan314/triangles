import React from 'react';
import './App.css';
import HeroLayout from './layouts/hero';
import GalleryLayout from './layouts/gallery';
import FooterLayout from './layouts/footer';

function App() {
  return (
    <div className="App">
      <HeroLayout/>
      <GalleryLayout/>
      <FooterLayout/>
    </div>
  );
}

export default App;
