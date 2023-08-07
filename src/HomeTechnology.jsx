import React from 'react';
import { useState } from 'react';
import "./HomeTechnology.css";
import { TfiArrowUp } from "react-icons/tfi"
import Fade from 'react-reveal';
import ht1 from "./ht1.webp";
import ht2 from "./ht2.webp";
import ht3 from "./ht3.webp";
import ht4 from "./ht4.webp";
import ht5 from "./ht5.webp";
import ht6 from "./ht6.webp";
import ht7 from "./ht7.webp";
import ht8 from "./ht8.webp";
import ht9 from "./ht9.webp";
import ht10 from "./ht10.webp";
import ht11 from "./ht11.webp";
import ht12 from "./ht12.webp";
import ht13 from "./ht13.webp";
import ht14 from "./ht14.jpg";
import ht15 from "./ht17.webp";
import ht16 from "./ht16.webp";
import ht17 from "./ht18.webp";
import ht18 from "./ht19.webp";
import ht19 from "./ht20.webp";
import ht20 from "./ht21.webp";
import ht21 from "./ht22.webp";
import ht22 from "./ht23.webp";
import ht23 from "./ht24.webp";
import ht24 from "./ht25.webp";
import ht25 from "./ht26.webp";
import ht26 from "./ht27.webp";
import ht27 from "./ht28.webp";
import ht28 from "./ht29.webp";
import ht29 from "./ht30.webp";
import ht30 from "./ht31.webp";
import ht31 from "./ht32.webp";
import ht32 from "./ht33.webp";


const HomeTechnology = () => {
  function scrollUp() {
    setTimeout(()=>{
       window.scrollTo({
        top:0,
        behavior: "smooth"
       })
  },100) 
 }
const [show, setShow]=useState(true);
const click=()=>{
  setShow(true);
  setShow2(false);
  down();
  setShow4(false);
  setShow3(false);
}
const [show2, setShow2]=useState(false);
const click2=()=>{
  setShow2(true);
  setShow(false);
  down();
  setShow4(false);
  setShow3(false);
}
const [show3, setShow3]=useState(false);
const click3=()=>{
  setShow3(true);
  setShow(false);
  setShow4(false);
  down();
  setShow2(false);
}
const [show4, setShow4]=useState(false);
const click4=()=>{
  down();
  setShow4(true);
  setShow(false);
  setShow3(false);
  setShow2(false);
}




const [spec1, setSpec1]=useState(false);
const handleMouseEnter = () => {
  setSpec1(true)
};
const handleMouseLeave = () => {
  setSpec1(false)
};

const [spec2, setSpec2]=useState(false);
const handleMouseEnter2 = () => {
  setSpec2(true)
};
const handleMouseLeave2 = () => {
  setSpec2(false)
};

const [spec3, setSpec3]=useState(false);
const handleMouseEnter3 = () => {
  setSpec3(true)
};
const handleMouseLeave3 = () => {
  setSpec3(false)
};

const [spec4, setSpec4]=useState(false);
const handleMouseEnter4 = () => {
  setSpec4(true)
};
const handleMouseLeave4 = () => {
  setSpec4(false)
};

const [spec5, setSpec5]=useState(false);
const handleMouseEnter5 = () => {
  setSpec5(true)
};
const handleMouseLeave5 = () => {
  setSpec5(false)
};

const [spec6, setSpec6]=useState(false);
const handleMouseEnter6 = () => {
  setSpec6(true)
};
const handleMouseLeave6 = () => {
  setSpec6(false)
};

const [spec7, setSpec7]=useState(false);
const handleMouseEnter7 = () => {
  setSpec7(true)
};
const handleMouseLeave7 = () => {
  setSpec7(false)
};

const [spec8, setSpec8]=useState(false);
const handleMouseEnter8 = () => {
  setSpec8(true)
};
const handleMouseLeave8 = () => {
  setSpec8(false)
};
const down = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0.5,
      behavior: "smooth"
    });
  }, 200);
}


  return (
    <div>
     <Fade bottom>
      <h1 className="ph">Discover the newest home technology</h1>
<h1 className="ph2">All Brands</h1>
</Fade>
<Fade bottom>
<div className="ph9"> 
  <button className="ph8" onClick={click}>Fridge</button>
  <button className="ph8" onClick={click2}>Washing machine</button>
  <button className="ph8" onClick={click3}>Stove</button>
  <button className="ph8" onClick={click4}>Dishwasher</button>
</div>   
</Fade>
<Fade bottom>
{show &&
  <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={ht1} alt="" className="ph4" />
  <h2 className="ph7">Teka RLF</h2>
  <h3 className="ph10">Color: Grey</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Number of doors:</strong> 2</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Total volume:</strong> 500 lt</h4>
<h4 className="www2"><strong>Melting system:</strong> NoFrost</h4>
<h4 className="www2"><strong>Energy use class:</strong> A++</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Material of shelves:</strong> Glass </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={ht2} alt="" className="ph4" />
  <h2 className="ph7">Bompani</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Number of doors:</strong> 2</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Total volume:</strong> 500 lt</h4>
<h4 className="www2"><strong>Melting system:</strong> NoFrost</h4>
<h4 className="www2"><strong>Energy use class:</strong> A++</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Material of shelves:</strong> Glass </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={ht3} alt="" className="ph4" />
  <h2 className="ph7">LG</h2>
  <h3 className="ph10">Color: Deep Black</h3>
  <h3 className="ph10">Price: $1599</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Number of doors:</strong> 2</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Total volume:</strong> 500 lt</h4>
<h4 className="www2"><strong>Melting system:</strong> NoFrost</h4>
<h4 className="www2"><strong>Energy use class:</strong> A++</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Material of shelves:</strong> Glass </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={ht4} alt="" className="ph4" />
  <h2 className="ph7">Bosch</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Number of doors:</strong> 2</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Total volume:</strong> 500 lt</h4>
<h4 className="www2"><strong>Melting system:</strong> NoFrost</h4>
<h4 className="www2"><strong>Energy use class:</strong> A++</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Material of shelves:</strong> Glass </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={ht5} alt="" className="ph4" />
  <h2 className="ph7">Teka RFD</h2>
  <h3 className="ph10">Color: Dark Black</h3>
  <h3 className="ph10">Price: $1099</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Number of doors:</strong> 2</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Total volume:</strong> 500 lt</h4>
<h4 className="www2"><strong>Melting system:</strong> NoFrost</h4>
<h4 className="www2"><strong>Energy use class:</strong> A++</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Material of shelves:</strong> Glass </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={ht6} alt="" className="ph4" />
  <h2 className="ph7">Teka RMF</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $999</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Number of doors:</strong> 2</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Total volume:</strong> 500 lt</h4>
<h4 className="www2"><strong>Melting system:</strong> NoFrost</h4>
<h4 className="www2"><strong>Energy use class:</strong> A++</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Material of shelves:</strong> Glass </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={ht7} alt="" className="ph4" />
  <h2 className="ph7">Bompani</h2>
  <h3 className="ph10">Color: Orange</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Number of doors:</strong> 2</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Total volume:</strong> 500 lt</h4>
<h4 className="www2"><strong>Melting system:</strong> NoFrost</h4>
<h4 className="www2"><strong>Energy use class:</strong> A++</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Material of shelves:</strong> Glass </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={ht8} alt="" className="ph4" />
  <h2 className="ph7">Bompani </h2>
  <h3 className="ph10">Color: Orange</h3>
  <h3 className="ph10">Price: $1299</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Number of doors:</strong> 2</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Total volume:</strong> 500 lt</h4>
<h4 className="www2"><strong>Melting system:</strong> NoFrost</h4>
<h4 className="www2"><strong>Energy use class:</strong> A++</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Material of shelves:</strong> Glass </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
   </div>
        </div>
          </div>
}
</Fade>

{show2 && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={ht9} alt="" className="ph4" />
  <h2 className="ph7">Toshiba</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Maximum load of laundry:</strong> 9 kg</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Timer:</strong> Yes</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Maximum compression <br/> speed:</strong> 1400 cycle/min </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={ht10} alt="" className="ph4" />
  <h2 className="ph7">Bompani</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Maximum load of laundry:</strong> 9 kg</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Timer:</strong> Yes</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Maximum compression <br/> speed:</strong> 1400 cycle/min </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={ht11} alt="" className="ph4" />
  <h2 className="ph7">LG</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1599</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Maximum load of laundry:</strong> 9 kg</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Timer:</strong> Yes</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Maximum compression <br/> speed:</strong> 1400 cycle/min </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={ht12} alt="" className="ph4" />
  <h2 className="ph7">Bosch</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Maximum load of laundry:</strong> 9 kg</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Timer:</strong> Yes</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Maximum compression <br/> speed:</strong> 1400 cycle/min </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={ht13} alt="" className="ph4" />
  <h2 className="ph7">Bompani</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1099</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Maximum load of laundry:</strong> 9 kg</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Timer:</strong> Yes</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Maximum compression <br/> speed:</strong> 1400 cycle/min </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={ht14} alt="" className="ph4" />
  <h2 className="ph7">Bosch</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $999</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Maximum load of laundry:</strong> 9 kg</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Timer:</strong> Yes</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Maximum compression <br/> speed:</strong> 1400 cycle/min </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={ht15} alt="" className="ph4" />
  <h2 className="ph7">Toshiba</h2>
  <h3 className="ph10">Color:  Gray</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Maximum load of laundry:</strong> 9 kg</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Timer:</strong> Yes</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Maximum compression <br/> speed:</strong> 1400 cycle/min </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={ht16} alt="" className="ph4" />
  <h2 className="ph7">LG</h2>
  <h3 className="ph10">Color: Dark Black</h3>
  <h3 className="ph10">Price: $1299</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Maximum load of laundry:</strong> 9 kg</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Timer:</strong> Yes</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Maximum compression <br/> speed:</strong> 1400 cycle/min </h4>
<h4 className="www2"><strong>Installation type:</strong> Foreign</h4>
</div>}
   </div>
        </div>
          </div> }

{show3 && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={ht17} alt="" className="ph4" />
  <h2 className="ph7">Toshiba</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={ht18} alt="" className="ph4" />
  <h2 className="ph7">Bompani</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={ht19} alt="" className="ph4" />
  <h2 className="ph7">LG</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1599</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={ht20} alt="" className="ph4" />
  <h2 className="ph7">Bosch</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={ht21} alt="" className="ph4" />
  <h2 className="ph7">Bompani</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1099</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={ht22} alt="" className="ph4" />
  <h2 className="ph7">Bosch</h2>
  <h3 className="ph10">Color: Grey</h3>
  <h3 className="ph10">Price: $999</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={ht23} alt="" className="ph4" />
  <h2 className="ph7">Toshiba</h2>
  <h3 className="ph10">Color:  Gray</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={ht24} alt="" className="ph4" />
  <h2 className="ph7">LG</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1299</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
   </div>
        </div>
          </div>}

{show4 && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={ht25} alt="" className="ph4" />
  <h2 className="ph7">Toshiba</h2>
  <h3 className="ph10">Color: Purple</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={ht26} alt="" className="ph4" />
  <h2 className="ph7">Bompani</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={ht27} alt="" className="ph4" />
  <h2 className="ph7">LG</h2>
  <h3 className="ph10">Color: Grey</h3>
  <h3 className="ph10">Price: $1599</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={ht28} alt="" className="ph4" />
  <h2 className="ph7">Bosch</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={ht29} alt="" className="ph4" />
  <h2 className="ph7">Bompani</h2>
  <h3 className="ph10">Color: Dark Black</h3>
  <h3 className="ph10">Price: $1099</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={ht30} alt="" className="ph4" />
  <h2 className="ph7">Bosch</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $999</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={ht31} alt="" className="ph4" />
  <h2 className="ph7">Toshiba</h2>
  <h3 className="ph10">Color:  Gray</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={ht32} alt="" className="ph4" />
  <h2 className="ph7">LG</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1299</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Type of cleaning:</strong> Hydrolysis (with steam)</h4>
<h4 className="www2"><strong>Depth:</strong> 77.7 sm</h4>
<h4 className="www2"><strong>Display:</strong> Yes</h4>
<h4 className="www2"><strong>Power:</strong> 3500 Vt</h4>
<h4 className="www2"><strong>Type of management:</strong> Electron</h4>
<h4 className="www2"><strong>Capacity: </strong> 77 lt</h4>
<h4 className="www2"><strong>Energy use class:</strong> A</h4>
</div>}
   </div>
        </div>
          </div>}





<div className="ph13">
<h1 className="title">Please go above to look<br/> again home technologies</h1> 
  <div className="hm40">
    <div className="hm41" onClick={scrollUp}>
      <div className="hm42"><TfiArrowUp/></div>
    </div>
  </div>
   <div className="hm45">
<div> 
<h1 className="hm46">Phone</h1>
<h2 className="hm47">Apple</h2>
<p className="hm48">iPhone 14 Pro Max</p>
<p className="hm48">iPhone 14 Pro</p>
<p className="hm48">iPhone 14 Plus</p>
<p className="hm48">iPhone 13 Pro Max</p>
<p className="hm48">iPhone 13 Pro </p>
<h2 className="hm49">Samsung</h2>
<p className="hm48">Samsung Galaxy S23 Ultra</p>
<p className="hm48">Samsung Galaxy S23</p>
<p className="hm48">Samsung Galaxy S23+</p>
<p className="hm48">Samsung Galaxy S22 </p>
<p className="hm48">Samsung Galaxy Z FOLD 4</p>
<h2 className="hm49">Huawei</h2>
<p className="hm48">HUAWEI P60 Pro</p>
<p className="hm48">HUAWEI P60</p>
<p className="hm48">HUAWEI Nova 10 Pro</p>
<p className="hm48">HUAWEI Nova 10 </p>
<p className="hm48">HUAWEI Nova 9 </p>
</div>
<div className='hm52'>   
<h1 className="hm50">Laptop</h1>
  <h2 className="hm51">Apple</h2>
  <p>Mackbook Pro 16</p>
  <p>Mackbook Air 15</p>
  <p>Mackbook Pro 14</p>
  <p>Mackbook Pro 13</p>
  <h2 className="hm53">Asus</h2>
  <p>Asus ROG Strix SCAR 16</p>
  <p>Asus ROG Strix G18</p>
  <p>Asus ROG Strix ROG Zephyrus</p>
  <p>Asus Zenbook</p>
  <p>Asus Vivobook Pro</p>
  <h2 className="hm53">MSI</h2>
  <p>MSI Vector GP77</p>
  <p>MSI Katana 15</p>
  <p>MSI Pulse GL76</p>
  <p>MSI Katana GF66</p>
  <p>MSI Sword 15</p>
</div>
<div className="hm52">
<h1 className="hm50">Tablet</h1>
<h2 className="hm51">Apple</h2>
<p>iPad Pro 12.9-inch (6Th Gen)</p>
<p>iPad Pro 11-inch (4Th Gen)</p>
<p>iPad Air 5 Wi-Fi + 4G</p>
<p>iPad Air 5 Wi-Fi</p>
<p>iPad 9</p>
<h2 className="hm53">Samsung</h2>
<p>Samsung Galaxy Tab S8+ 5G</p>
<p>Samsung Galaxy Tab S8 5G</p>
<p>Samsung Galaxy Tab S6 Lite</p>
<h1 className="hm50">Watch</h1>
<h2 className="hm51">Apple</h2>
<p>Apple Watch 8 45mm</p>
<p>Apple Watch 8 41mm</p>
<p>Apple Watch 7 41mm</p>
<h2 className="hm53">Samsung</h2>
<p>Samsung Watch5 Pro BT</p>
<p>Samsung Watch 5 BT </p>
<p>Samsung Watch 4 </p>
</div>
<div className="hm52">
<h1 className="hm50">Headset</h1>
<h2 className="hm51">Apple</h2>
<p>Beats Studio Pro </p>
<p>Beats Solo3</p>
<p>Beats Studio</p>
<p>Beats Studio Buds</p>
<p>Airpods</p>
<h2 className="hm54">Bang & Olufsen</h2>
<p>Bang & Olufsen H95</p>
<p>Bang & Olufsen Beoplay</p>
<h1 className="hm50">TV</h1>
<h2 className="hm51">Samsung</h2>
<p>Samsung OLED 8K</p>
<p>Samsung OLED 4K</p>
<h2 className="hm54">LG</h2>
<p>LG OLED 4K</p>
<p>LG OLED 4K UHD</p>
<h2 className="hm54">SONY</h2>
<p>SONY KD</p>
<p>SONY XR</p>
</div>
<div className="hm52">
<h1 className="hm50">Home Technology</h1>
<h2 className="hm51">Fridge</h2>
<p>Teka RMF</p>
<p>Bompani</p>
<p>Bosch</p>
<p>LG</p>
<p>Samsung</p>
<h2 className="hm54">Washing Machine</h2>
<p>Teka TKD</p>
<p>LG</p>
<p>Bosch</p>
<p>Samsung</p>
<p>Bompani</p>
<h2 className="hm54">Stove</h2>
<p>Stove AEG</p>
<p>Stove LG</p>
<p>Stove Bompani</p>
<p>Stove Bosch</p>
<p>Stove Samsung</p>
       </div>
    </div>
</div>




    </div>
  )
}

export default HomeTechnology