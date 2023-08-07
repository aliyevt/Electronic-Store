import React from 'react';
import { TfiArrowUp } from "react-icons/tfi";
import Fade from 'react-reveal';
import "./Laptop.css";
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import lt1 from "./lt1.webp";
import lt2 from "./lt2.webp";
import lt3 from "./lt3.webp";
import lt4 from "./lt4.webp";
import lt5 from "./lt5.jpg";
import lt6 from "./lt6.webp";
import lt7 from "./lt8.webp";
import lt8 from "./lt7.webp";
import lt9 from "./lt9.webp";
import lt10 from "./lt10.webp";
import lt11 from "./lt11.webp";
import lt12 from "./lt12.webp";
import lt13 from "./lt13.webp";
import lt14 from "./lt14.webp";
import lt15 from "./lt15.webp";
import lt16 from "./lt16.webp";
import lt17 from "./lt17.webp";
import lt18 from "./lt18.webp";
import lt19 from "./lt19.webp";
import lt20 from "./lt20.webp";
import lt21 from "./lt21.webp";
import lt22 from "./lt22.webp";
import lt23 from "./lt23.webp";
import lt24 from "./lt24.webp";
import lt25 from "./lt25.webp";
import lt26 from "./lt26.webp";
import lt27 from "./lt27.webp";
import lt28 from "./lt28.webp";
import lt29 from "./lt29.webp";
import lt30 from "./lt30.webp";
import lt31 from "./lt31.webp";
import lt32 from "./lt32.webp";
import { ipad } from './Tablet';
import lt33 from "./lt33.jpg";





const Laptop = () => {
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
    setShow3(false);
    setShow4(false);
    down();
    setShow4(false);
  }
  const [show2, setShow2]=useState(false);
  const click2=()=>{
    setShow2(true);
    down();
    setShow(false);
    setShow4(false);
    setShow3(false);
  }
  const [show3, setShow3]=useState(false);
  const click3=()=>{
    setShow3(true);
    setShow(false);
    setShow2(false);
    setShow4(false);
    down();
  }
  const [show4, setShow4]=useState(false);
  const click4=()=>{
    setShow4(true);
    setShow(false);
    setShow3(false);
    down();
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




  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };














  return (
    <div>
      <Fade bottom>
     <h1 className="ph">Discover the laptop & tablet</h1>
<h1 className="ph2">All Brands</h1>
</Fade>
<Fade bottom>
<div className="ph9"> 
  <button className="ph8" onClick={click}>Apple</button>
  <button className="ph8" onClick={click2}>Asus</button>
  <button className="ph8" onClick={click3}>HP</button>
  <button className="ph8" onClick={click4}>Dell</button>
</div>   
</Fade>

<Fade bottom>
{show && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={lt1} alt="" className="lh7" />
  <h2 className="ph7">Macbook Pro 16</h2>
  <h3 className="ph10">Color: Grey</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>Processor:</strong> Apple M2 Max</h4>
<h4 className="www2"><strong>Operating system:</strong> MacOS</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={lt2} alt="" className="lh7" />
  <h2 className="ph7">Macbook Pro 16</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>Processor:</strong> Apple M2 Max</h4>
<h4 className="www2"><strong>Operating system:</strong> MacOS</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={lt3} alt="" className="lh7" />
  <h2 className="ph7">Macbook Air 13"</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1199</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>Processor:</strong> Apple M2 Max</h4>
<h4 className="www2"><strong>Operating system:</strong> MacOS</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={lt4} alt="" className="lh7" />
  <h2 className="ph7">Macbook Air 15</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>Processor:</strong> Apple M2 Max</h4>
<h4 className="www2"><strong>Operating system:</strong> MacOS</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={lt5} alt="" className="lh7" />
  <h2 className="ph7">Macbook Air 15</h2>
  <h3 className="ph10">Color: Grey</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>Processor:</strong> Apple M2 Max</h4>
<h4 className="www2"><strong>Operating system:</strong> MacOS</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={lt6} alt="" className="lh7" />
  <h2 className="ph7">Macbook Air 15</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>Processor:</strong> Apple M2 Max</h4>
<h4 className="www2"><strong>Operating system:</strong> MacOS</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={lt7} alt="" className="lh7" />
  <h2 className="ph7">Macbook Air 15</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>Processor:</strong> Apple M2 Max</h4>
<h4 className="www2"><strong>Operating system:</strong> MacOS</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={lt8} alt="" className="lh7" />
  <h2 className="ph7">Macbook Air 13 </h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1199</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>Processor:</strong> Apple M2 Max</h4>
<h4 className="www2"><strong>Operating system:</strong> MacOS</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
   </div>
        </div>
          </div>}
</Fade>

{show2 && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={lt9} alt="" className="lh7" />
  <h2 className="ph7">Asus ROG Strix</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={lt10} alt="" className="lh7" />
  <h2 className="ph7">Asus Tuf</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={lt11} alt="" className="lh7" />
  <h2 className="ph7">Asus ROG Zephyrus</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={lt12} alt="" className="lh7" />
  <h2 className="ph7">Asus ROG Strix</h2>
  <h3 className="ph10">Color: Dark Gray</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={lt13} alt="" className="lh7" />
  <h2 className="ph7">Asus Zenbook</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={lt14} alt="" className="lh7" />
  <h2 className="ph7">Asus VivoBook Pro</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={lt15} alt="" className="lh7" />
  <h2 className="ph7">Asus Zenbook Pro</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={lt16} alt="" className="lh7" />
  <h2 className="ph7">Asus VivoBook  </h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1199</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
   </div>
        </div>
          </div>}

{show3 && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={lt17} alt="" className="lh7" />
  <h2 className="ph7">HP Envy</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={lt18} alt="" className="lh7" />
  <h2 className="ph7">HP Omen</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={lt19} alt="" className="lh7" />
  <h2 className="ph7">HP Pavilion Plus</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={lt20} alt="" className="lh7" />
  <h2 className="ph7">HP Envy</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={lt21} alt="" className="lh7" />
  <h2 className="ph7">HP ProBook</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={lt22} alt="" className="lh7" />
  <h2 className="ph7">HP Pavilion</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={lt23} alt="" className="lh7" />
  <h2 className="ph7">HP EliteBook</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={lt24} alt="" className="lh7" />
  <h2 className="ph7">HP Spectre  </h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1199</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
   </div>
        </div>
          </div>}

{show4 && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={lt25} alt="" className="lh7" />
  <h2 className="ph7">Acer Predator</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={lt26} alt="" className="lh7" />
  <h2 className="ph7">Acer Triton</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={lt27} alt="" className="lh7" />
  <h2 className="ph7">Acer Nitro 5</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={lt28} alt="" className="lh7" />
  <h2 className="ph7">Acer Nitro 5</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={lt29} alt="" className="lh7" />
  <h2 className="ph7">Acer Swift 3</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={lt30} alt="" className="lh7" />
  <h2 className="ph7">Acer Aspire 3</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={lt31} alt="" className="lh7" />
  <h2 className="ph7">Acer Aspire</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1499</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={lt32} alt="" className="lh7" />
  <h2 className="ph7"> Acer Swift 3  </h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $1199</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen diagonal:</strong> 16"</h4>
<h4 className="www2"><strong>Image capability:</strong> 3456 x 2234</h4>
<h4 className="www2"><strong>HDD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Processor:</strong> Ryzen 7</h4>
<h4 className="www2"><strong>Webcam:</strong> 5 MP (1080p)</h4>
<h4 className="www2"><strong>SSD:</strong> 1 TB</h4>
<h4 className="www2"><strong>Type of RAM:</strong> LPDDR5</h4>
<h4 className="www2"><strong>Wi-Fi:</strong> Wi-Fi 6E (802.11ax)</h4>
</div>}
   </div>
        </div>
          </div>}

<div className="lt3">
<img src={lt33} alt="" className="lt2" />
<h1 className="lt4">Look at the<br/> newest iPads</h1>
</div>





<Fade bottom>
  <div className="lt1">  </div>
</Fade>
          <Fade bottom>
      <div className="lt">  
            <div className="App">
                 <Slider {...settings}>
    {ipad.map(iteem=>(
        <div className='hm7'>
          <div className='hm8'>
          <img className='hm9' src={iteem.image}/>
             <div className='lt7'>
          <h1 className='hm10'>{iteem.title}</h1>
               <div className='hm12'>
          <h2 className='lt5'>{iteem.text7}</h2> 
          <p className='hm11'>{iteem.text}</p>
          <p className='hm11'>{iteem.text2}</p>
          <p className='hm11'>{iteem.text3}</p>
          <p className='hm11'>{iteem.text4}</p>
          <p className='hm11'>{iteem.text5}</p>   
     </div>
             </div>
           </div>
        </div> 
    ))}
    </Slider>
</div>
    </div>    
</Fade>


<Fade bottom>
  <h1 className="lt8">Please go above to  look <br/>again  laptops and tablets</h1>
</Fade>
<Fade bottom>
  <div className="hm40">
    <div className="hm41" onClick={scrollUp}>
      <div className="hm42"><TfiArrowUp/></div>
    </div>
  </div>
</Fade>
<div className="hm43">
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

export default Laptop