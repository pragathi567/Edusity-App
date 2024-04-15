
import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

function App() {
  const [play,setPlay] = useState(false);
  return (
    <div>
      <Hero/>
      <Programs/>
      <About setPlay={setPlay}/>
      <Campus/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <VideoPlayer play={play} setPlay={setPlay}/>
    </div>
  );
}

export default App;
