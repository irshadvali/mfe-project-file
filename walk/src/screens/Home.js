import React from 'react'
import {useNavigate} from 'react-router-dom'
import TitleText from './TitleText';
function Home() {
  const navigate = useNavigate();
  const goToAbout =()=>{
    navigate('/about')
  }
  const goToContact =()=>{
    navigate('/contact')
  }
  return (
    <div>
      <TitleText/>
      <p>WalkApp-Home</p>
      <button onClick={goToAbout}>About</button>
      <button onClick={goToContact}>Contact</button>
    </div>
  );
}

export default Home
