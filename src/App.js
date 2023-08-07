import './App.css';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import HomeTechnology from './HomeTechnology';
import Laptop from './Laptop';
import Tv from './Tv';
import Time from './Time';
import Phone from './Phone';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Notfound from './Notfound';
import app from "./app.png"

function App() {
  const{pathname}=useLocation();
  useLayoutEffect(()=>{
    window.scrollTo({top:0,behavior: "auto"});
  },[pathname])
  return (
    <div>
<div className='navbar'>    
<Link to='./' ><span className='path'>Home</span></Link>
<Link to='./phone'>Phone</Link>
<Link to='./hometechnology'>Home Technology</Link>
<img className='appimg1' src={app} alt='' />
<Link to='./laptop'>Laptop & Tablet</Link>
<Link to='./tv'>TV & Headset</Link>
<Link to='./time'>Watch</Link>
</div>  





<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/phone' element={<Phone/>}/>
    <Route path='/hometechnology' element={<HomeTechnology/>}/>
    <Route path='/laptop' element={<Laptop/>}/>
    <Route path='/tv' element={<Tv/>}/>
    <Route path='/time' element={<Time/>}/>
    <Route path='*' element={<Notfound/>}/>
</Routes>











    </div>
  );
}

export default App;
