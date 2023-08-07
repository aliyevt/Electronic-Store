import React from 'react';
import "./Home.css";
import Fade from 'react-reveal';
import hm from "./hm1.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { phone } from './Iphone';
import hm2 from "./hm13.webp";
import { pc } from './Gamer';
import hm3 from "./hm14.jpeg";
import hm4 from "./hm15.jpg";
import hm5 from "./hm16.jpg";
import { headset } from './Head';
import hm7 from "./hm25.png";
import hm8 from "./hm22.png";
import hm9 from "./hm21.png";
import hm10 from "./hm24.png";
import hm11 from "./hm26.png";
import hm12 from "./hm27.png";
import hm13 from "./hm23.png";
import { TfiArrowUp } from "react-icons/tfi"
import hm14 from "./hm0.jpg";

const Home = () => {
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
      <div className="hma">
        <Fade bottom>
        <h1 className="hma3">Newest <br/> Technologies</h1>
      <img src={hm14} alt="" className="hma2" />
      </Fade>
      </div>


 <Fade bottom>       
<h1 className="hm">Mackbook Air 16"</h1>
<h1 className='hm1'>Impressively big. Impressively thin.</h1>
</Fade>
<Fade bottom>
    <div className="hm3">
    <img src={hm} alt="" className="hm2" />
    </div>
</Fade>
        <Fade bottom>
            <h1 className="hm5">iPhone 14 Pro & Pro Max</h1>
                 </Fade>
                 <Fade bottom>
            <div className="App">
                 <Slider {...settings}>
    {phone.map(iteem=>(
        <div className='hm7'>
          <div className='hm8'>
          <img className='hm9' src={iteem.image}/>
             <div className='hm13'>
          <h1 className='hm10'>{iteem.title}</h1>
               <div className='hm12'>
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
</Fade>
<Fade bottom>
  <h1 className="hm14">Gamer PC</h1>
</Fade>
<Fade bottom>
  <div className="hm16">
  <img src={hm2} alt="" className="hm15" />
  </div>
</Fade>
<Fade bottom>
<div className="App">
                 <Slider {...settings}>
    {pc.map(iteem=>(
        <div className='hm20'>
          <div className='hm8'>
          <img className='hm21' src={iteem.image}/>
             <div className='hm17'>
          <h1 className='hm18'>{iteem.title}</h1>
               <div>
          <h2 className='hm19'>{iteem.memory}</h2>
          <h2 className="hm19">{iteem.boost}</h2>
          <h2 className="hm19">{iteem.ssd}</h2>
          <h2 className='hm19'>{iteem.price}</h2>
     </div>
             </div>
           </div>
        </div> 
    ))}
    </Slider>
</div>
</Fade>
<Fade bottom>
  <h1 className="hm22">TV & Headset</h1>
</Fade>
<Fade bottom>
  <div className="hm24">
<img src={hm3} alt="" className="hm23" />
</div>
</Fade>
<Fade bottom>
  <h1 className="hm27">Apple TV</h1>
</Fade>
<Fade bottom>
  <div className="hm28">
  <img src={hm4} alt="" className="hm25" />
  <img src={hm5} alt="" className="hm26" />
  </div>
</Fade>
<Fade bottom>
  <h1 className="hm29">Discover the new Headset</h1>
</Fade>
<Fade bottom>
<div className="App">
                 <Slider {...settings}>
    {headset.map(iteem=>(
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
<Fade bottom>
  <h1 className="hm30">Home Technology</h1>
</Fade>

<Fade bottom>
  <img src={hm7} alt="" className="hm31" />
  <img src={hm8} alt="" className="hm32" />
  <img src={hm9} alt="" className="hm33" />
  <img src={hm10} alt="" className="hm34" />
</Fade>
<Fade bottom>
  <img src={hm11} alt="" className="hm35" />
  <img src={hm13} alt="" className="hm38" />
  <img src={hm12} alt="" className="hm37" />
</Fade>
<Fade bottom>
  <h1 className="hm39">Please go above to  look  <br/>again our products</h1>
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

export default Home