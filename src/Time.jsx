import React from 'react';
import "./Time.css";
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { TfiArrowUp } from "react-icons/tfi";
import Fade from 'react-reveal';
import { clock } from './Watch';
import tm1 from "./tm1.jpeg";
import { does } from './W2atch';
import tm2 from "./tm9.png";
import { spec } from './W3atch';
import { other } from './W4atch';
import tm3 from "./tm35.jpg";
import tm4 from "./tm37.jpg";
import tm5 from "./tm38.png";
import tm7 from "./tm39.png";
import tm8 from "./tm40.jpg";


const Time = () => {
  function scrollUp() {
    setTimeout(()=>{
       window.scrollTo({
        top:0,
        behavior: "smooth"
       })
  },100) 
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
  const [buttonText, setButtonText] = useState('Buy');
  const [buttonText2, setButtonText2] = useState('Buy');
  const [buttonText3, setButtonText3] = useState('Buy');
  const [buttonColor, setButtonColor] = useState('#0071E3');
  const [button2Color, setButton2Color] = useState('#0071E3');
  const [button3Color, setButton3Color] = useState('white');
  const [buttonColor4, setButtonColor4] = useState('#0071E3');
  const click=()=>{
    setButtonText("Purchased");
    setButtonColor("black");
  }
  const click2=()=>{
    setButtonText3("Purchased");
    setButton2Color("white");
    setButton3Color("black");
  }
  const click3=()=>{
    setButtonText2("Purchased");
    setButtonColor4("black");
  }





  return (
    <div>
      <div className="tm11">
        <div className="tm13">
          <div className="tm15">
            <Fade bottom>
      <img src={tm5} alt="" className="tm12" />
      <h1 className="tm14">WATCH</h1>
           </Fade>
             </div>
             <Fade bottom>
<h1 className="tm16">ULTRA</h1>
<h1 className="tm17">Adventure awaits.</h1>
<h1 className="tm18">$799</h1>
    <div className="tm20">
<button className="tm19" onClick={click} style={{ backgroundColor: buttonColor }}>{buttonText}</button>
    </div>
            </Fade>
<Fade bottom>
      <img src={tm3} alt="" className="tm10" />
</Fade>      
           </div>
      </div>



      <div className="tm22">
        <div className="tm23">
<img src={tm4} alt="" className="tm21" />
<div className='tm28'>
      <div className="tm26">
<img src={tm7} alt="" className="tm24" />
<h1 className="tm25">WATCH</h1>
      </div>
      <h1 className="tm27">SERIES 8</h1> 
      <h1 className="tm29">A healthy<br/> leap ahead.</h1>
      <h2 className="tm30">From $399</h2>
<button className="tm31"  onClick={click2} style={{ backgroundColor: button2Color, color: button3Color }}>
        {buttonText3}</button>
</div>




    </div>
 
</div>



<Fade bottom>
     <h1 className="ph">Discover the newest watches</h1>
<h1 className="ph2">All Brands</h1>
<h1 className="tm7">Case</h1>
</Fade>
<Fade bottom>

<img src={tm1} alt="" className="tm1" />
<div className="App">
                 <Slider {...settings}>
    {clock.map(iteem=>(
        <div className='hm20'>      
          <img className='tm2' src={iteem.image}/>  
          <div className='tm3'> 
          <p>{iteem.text}</p>
          <p><strong>{iteem.text2}</strong></p>
          <p>{iteem.text3}</p>    
                  </div>                 
        </div> 
    ))}
    </Slider>
</div>
</Fade>
<Fade bottom>
<h1 className="tm7">Band</h1>
</Fade>
<Fade bottom>
<div className="App">
                 <Slider {...settings}>
    {does.map(iteem=>(
        <div className='hm20'>      
          <img className='tm2' src={iteem.image}/>  
          <img src={tm2} alt="" className="tm4" /> 
          <div className='tm3'> 
          <p>{iteem.text}</p> 
          <p><strong>{iteem.text2}</strong></p>
          <p>{iteem.text3}</p>    
                  </div>                 
        </div> 
    ))}
    </Slider>
</div>
</Fade>
<Fade bottom>
<h1 className="tm7">Size</h1>
</Fade>
<Fade bottom>
<div className="App">
                 <Slider {...settings}>
    {spec.map(iteem=>(
        <div className='hm20'>      
          <img className='tm2' src={iteem.image}/>  
          <img className='tm5' src={iteem.image2}/>  
          <div className='tm3'> 
          <p>{iteem.text}</p> 
          <p><strong>{iteem.text2}</strong></p>
          <p>{iteem.text3}</p>    
                  </div>                 
        </div> 
    ))}
    </Slider>
</div>
</Fade>
<h1 className="tm32">And other models</h1>
<div className="App">
                 <Slider {...settings}>
    {other.map(iteem=>(
        <div className='hm20'>
          <div className='hm8'>
          <img className='hm21' src={iteem.image}/>
             <div className='hm17'>
          <h1 className='tm8'>{iteem.title}</h1>
               <div>
          <h3 className='tm9'>{iteem.text}</h3>     
          <h3 className='tm9'>{iteem.text2}</h3> 
          <h3 className='tm9'>{iteem.text3}</h3>
          <h3 className='tm9'>{iteem.text4}</h3>     
          <h3 className='tm9'>{iteem.text5}</h3> 
          <h3 className='tm9'>{iteem.text6}</h3>
          <h3 className='tm9'>{iteem.price}</h3>
     </div>
             </div>
           </div>
        </div> 
    ))}
    </Slider>
</div>



   <div className="tm34">
        <div className="tm37">
  <div> 
     <div className='tm39'>
    <img src={tm5} className='tm35' alt="" />
    <h1 className="tm38">WATCH</h1>
     </div>
<h2 className='tm40'>SE</h2>
<h1 className="tm41">A great deal <br/>to love.</h1>
<h2 className="tm42">From $249</h2>
<button className="tm43" onClick={click3} style={{ backgroundColor: buttonColor4 }}>{buttonText2}</button>
   </div> 


    <img src={tm8} alt="" className="tm33" />
        </div>











   </div>


<div className="tm44">
<h1 className="tm45">Please go above to look<br/> again watches</h1> 
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

export default Time