import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import BootstrapStyles from './components/BootstrapStyles';
import MusicGallery from './components/MusicGallery';

function App() {
  


  useEffect(() => {
    document.body.style.background = 'linear-gradient(to bottom, rgba(2,0,16,1) 0%, rgba(1,25,36,1) 100%)';
  }, []);
  
  return (
    <div>
      <BootstrapStyles></BootstrapStyles>
      <MusicGallery></MusicGallery>
    </div>
  );
}

export default App;
