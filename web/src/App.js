import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import BootstrapStyles from './components/BootstrapStyles';
import MusicGallery from './components/MusicGallery';
import Title from './components/Title';

function App() {

  const [screenWidth, setScreenWidth] = useState();
  const [screenHeight, setScreenHeight] = useState();

  const updateWindowDimensions = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);
  
  return (
    <body style={{backgroundColor:'black', height:screenHeight, width:screenWidth}}>
      <BootstrapStyles></BootstrapStyles>
      <Title/>
      <MusicGallery></MusicGallery>
    </body>
  );
}

export default App;
