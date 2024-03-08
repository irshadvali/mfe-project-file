import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact'
function App() {
  return (
    <Router>
   <Routes>
     <Route path='/' element ={<Home/>}></Route>
     <Route path='/contact' element ={<Contact/>}></Route>
     <Route path='/about' element ={<About/>}></Route>
   </Routes>
   </Router>
  );
}

export default App;
