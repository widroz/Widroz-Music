import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import BootstrapStyles from './components/BootstrapStyles';
import MusicGallery from './components/MusicGallery';

function App() {
  
  const [screenWidth, setScreenWidth] = useState();
  const [screenHeight, setScreenHeight] = useState();

  const updateWindowDimensions = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    document.body.style.background = 'rgba(2,0,16,1)';
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);
  
  return (
    <div style={{width:screenWidth, height:screenHeight}}>
      <BootstrapStyles></BootstrapStyles>
      <MusicGallery></MusicGallery>
    </div>
  );
}

export default App;
