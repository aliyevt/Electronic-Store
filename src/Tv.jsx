import React from 'react';
import "./Tv.css";
import { TfiArrowUp } from "react-icons/tfi";
import Fade from 'react-reveal';
import { useState } from 'react';
import tv1 from "./tv1.webp";
import tv2 from "./tv2.webp";
import tv3 from "./tv3.webp";
import tv4 from "./tv4.webp";
import tv5 from "./tv5.webp";
import tv6 from "./tv6.webp";
import tv7 from "./tv7.jpg";
import tv8 from "./tv8.webp";
import tv9 from "./tv9.webp";
import tv10 from "./tv10.webp";
import tv11 from "./tv11.webp";
import tv12 from "./tv12.webp";
import tv13 from "./tv13.webp";
import tv14 from "./tv14.webp";
import tv15 from "./tv15.webp";
import tv16 from "./tv16.webp";
import tv17 from "./tv17.jpg";
import tv18 from "./hm15.jpg";
import tv19 from "./hm16.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { beats } from './HeadSet';

const Tv = () => {
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










const [shine, setShine]=useState(true)
const click=()=>{
  setShine(true);
  setShine2(false);
  down();
}
const [shine2, setShine2]=useState(false)
const click2=()=>{
  setShine2(true);
  setShine(false);
  down();
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

function scrollUp() {
  setTimeout(()=>{
     window.scrollTo({
      top:0,
      behavior: "smooth"
     })
},100) 
}








  return (
    <div>
   <Fade bottom>
     <h1 className="ph">Discover the tv & headset</h1>
<h1 className="ph2">All Brands</h1>
</Fade>
<Fade bottom>
<div className="ph9"> 
  <button className="ph8" onClick={click}>Samsung</button>
  <button className="ph8" onClick={click2}>LG</button>
</div>   
</Fade>
<Fade bottom>
  {shine && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={tv1} alt="" className="lh7" />
  <h2 className="ph7">  Neo QLED 8K UHD</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $2299</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 8K UHD<br/> (7680 x 4320)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={tv2} alt="" className="lh7" />
  <h2 className="ph7">Neo QLED 8K UHD</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $2299</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 8K UHD<br/> (7680 x 4320)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={tv3} alt="" className="lh7" />
  <h2 className="ph7"> OLED 4K UHD</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={tv4} alt="" className="lh7" />
  <h2 className="ph7">Neo QLED 4K UHD</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $2199</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={tv5} alt="" className="lh7" />
  <h2 className="ph7">Neo QLED 8K UHD</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $2299</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 8K UHD<br/> (7680 x 4320)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={tv6} alt="" className="lh7" />
  <h2 className="ph7"> QLED 4K UHD</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={tv7} alt="" className="lh7" />
  <h2 className="ph7">Crystal UHD</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen diagonal:</strong> 75" (190 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={tv8} alt="" className="lh7" />
  <h2 className="ph7"> OLED 4K UHD</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
   </div>
        </div>
          </div>}
</Fade>

{shine2 && <div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={tv9} alt="" className="lh7" />
  <h2 className="ph7">  OLED 4K UHD</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 X 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={tv10} alt="" className="lh7" />
  <h2 className="ph7">QLED 4K UHD</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 X 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={tv11} alt="" className="lh7" />
  <h2 className="ph7"> OLED 4K UHD</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={tv12} alt="" className="lh7" />
  <h2 className="ph7">4K UHD AI ThinQ</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={tv13} alt="" className="lh7" />
  <h2 className="ph7">OLED 4K UHD</h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={tv14} alt="" className="lh7" />
  <h2 className="ph7"> NanoCell 4K</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={tv15} alt="" className="lh7" />
  <h2 className="ph7">QNED 4K</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen diagonal:</strong> 75" (190 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={tv16} alt="" className="lh7" />
  <h2 className="ph7"> NanoCell 4K</h2>
  <h3 className="ph10">Color: Black</h3>
  <h3 className="ph10">Price: $2099</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen diagonal:</strong> 85" (216 sm)</h4>
<h4 className="www2"><strong>Display permission:</strong> 4K UHD<br/> (3840 x 2160)</h4>
<h4 className="www2"><strong>Sound power:</strong> 90 Vt</h4>
<h4 className="www2"><strong>Sound system:</strong> Dolby Digital Plus</h4>
<h4 className="www2"><strong>Frequency:</strong> 144 Hz</h4>
<h4 className="www2"><strong>HDR format:</strong> HDR 10+</h4>
<h4 className="www2"><strong>Type of light:</strong> Mini LED</h4>
</div>}
   </div>
        </div>
          </div>}
          <h1 className="tv8">Apple Tv</h1>
<div className="tv7">
<img src={tv18} alt="" className="tv5" />
<img src={tv19} alt="" className="tv5" />
</div>








<Fade bottom>
<div className="tv2"> 
  <img src={tv17} alt="" className="tv1" />
  <div>
  <h1 className="tv3">The future hits<br/> home.</h1>
  <p className="tv4">Simply connect your favorite devices and transform<br/> your house into a remarkably smart, convenient, and<br/>  entertaining home.  Elevate movie night with theater-like <br/>picture and sound. Play any song, in any room, from <br/>anywhere. And control lights, locks, and thermostats <br/>using  Siri. All with the security and privacy of Apple.</p>
  </div>
</div> 
</Fade>
<Fade bottom>
  <h1 className="tv9">Headsets</h1>
</Fade>
<Fade bottom>
<div className="App">
                 <Slider {...settings}>
    {beats.map(iteem=>(
        <div className='hm20'>
          <div className='hm8'>
          <img className='hm21' src={iteem.image}/>
             <div className='hm17'>
          <h1 className='hm18'>{iteem.title}</h1>
               <div>
          <h2 className='hm19'>{iteem.price}</h2>
     </div>
             </div>
           </div>
        </div> 
    ))}
    </Slider>
</div>
</Fade>






<div className="ph13">
<h1 className="title">Please go above to look<br/> again TV and headsets </h1> 
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

export default Tv