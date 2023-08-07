import React from 'react';
import "./Phone.css";
import ph from "./ph1.png";
import ph2 from "./ph4.png";
import ph3 from "./ph3.png";
import { TfiArrowUp } from "react-icons/tfi"
import ph4 from "./ph8.webp";
import ph5 from "./ph5.webp";
import ph7 from "./ph7.webp";
import ph8 from "./ph9.webp";
import ph9 from "./ph10.webp";
import { useState } from 'react';
import Fade from 'react-reveal';
import ph10 from "./ph11.webp";
import ph11 from "./ph15.webp";
import ph12 from "./ph13.webp";
import ph13 from "./ph14.webp";
import ph14 from "./ph16.webp";
import ph15 from "./ph17.webp";
import ph16 from "./ph18.webp";
import ph17 from "./ph19.webp";
import ph18 from "./ph20.webp";
import ph19 from "./ph21.webp";
import ph20 from "./ph22.webp";
import ph21 from "./ph23.webp";
import ph22 from "./ph24.webp";
import ph23 from "./ph25.webp";
import ph24 from "./ph26.webp";
import ph25 from "./ph27.webp";
import ph26 from "./ph28.webp";
import ph27 from "./ph29.jpg";
import ph28 from "./ph30.webp";
import ph29 from "./ph31.webp";
import ph30 from "./ph32.webp";
import ph31 from "./ph33.webp";
import ph32 from "./ph34.webp";
import ph33 from "./ph35.webp";





const Phone = () => {
  function scrollUp() {
    setTimeout(()=>{
       window.scrollTo({
        top:0,
        behavior: "smooth"
       })
  },100) 
 }
 const down = () => {
  setTimeout(() => {
    window.scrollTo({
      top: window.innerHeight * 0.5,
      behavior: "smooth"
    });
  }, 200);
}












  const [showElement, setShowElement] = useState(true);
  const handleClick = () => {
    setShowElement(true);
    setShowElement2(false);
    setShowElement3(false);
    setShowElement4(false);
    down();
  };
 // iphone
  const [showElement2, setShowElement2] = useState(false);
  const handleClick2 = () => {
    setShowElement2(true);
    setShowElement(false);
    setShowElement3(false);
    setShowElement4(false);
    down();
  };  
//samsung
const [showElement3, setShowElement3] = useState(false);
const handleClick3 = () => {
  setShowElement3(true);
  setShowElement(false);
  setShowElement2(false);
  setShowElement4(false);
  down();
};  
//huawei
const [showElement4, setShowElement4] = useState(false);
const handleClick4 = () => {
  setShowElement4(true);
  setShowElement(false);
  setShowElement3(false);
  setShowElement2(false);
  down();
}; 
//xiaomi



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


  return (
    <div>
      <Fade bottom>
      <h1 className="ph">Discover the newest phones</h1>
<h1 className="ph2">All Brands</h1>
</Fade>
<Fade bottom>
<div className="ph9"> 
  <button className="ph8" onClick={handleClick}>Apple</button>
  <button className="ph8" onClick={handleClick2}>Samsung</button>
  <button className="ph8" onClick={handleClick3}>Huawei</button>
  <button className="ph8" onClick={handleClick4}>Xiaomi</button>
</div>   
</Fade>

<Fade bottom>
{showElement &&
<div>
<div className="ph3">
          <div> 
 <div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
  <img src={ph} alt="" className="ph4" />
  <h2 className="ph7">iPhone 14 Pro Max</h2>
  <h3 className="ph10">Color: Gold</h3>
  <h3 className="ph10">Price: $1999</h3>
</div>   
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen:</strong> 6.7"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 1TB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 6 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 48 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>OS:</strong> IOS 16</h4>
<h4 className="www2"><strong>Chipset:</strong> Apple A16 Bionic </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4323 mAh</h4>
</div>}
           </div> 
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={ph7} alt="" className="ph4" />
  <h2 className="ph7">iPhone 14 Pro Max</h2>
  <h3 className="ph10">Color: Deep Purple</h3>
  <h3 className="ph10">Price: $1899</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen:</strong> 6.7"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 512 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 6 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 48 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>OS:</strong> IOS 16</h4>
<h4 className="www2"><strong>Chipset:</strong> Apple A16 Bionic </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4323 mAh</h4>
</div>}
       </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={ph4} alt="" className="ph4" />
  <h2 className="ph7">iPhone 14 Pro</h2>
  <h3 className="ph10">Color: Deep Purple</h3>
  <h3 className="ph10">Price: $1599</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 512 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 6 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 48 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>OS:</strong> IOS 16</h4>
<h4 className="www2"><strong>Chipset:</strong> Apple A16 Bionic </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4323 mAh</h4>
</div>}
     </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={ph5} alt="" className="ph4" />
  <h2 className="ph7">iPhone 14 Plus</h2>
  <h3 className="ph10">Color: Blue</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 48 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>OS:</strong> IOS 16</h4>
<h4 className="www2"><strong>Chipset:</strong> Apple A16 Bionic </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4323 mAh</h4>
</div>}
    </div>



        </div>
        <div className="ph11">
<div>
<div className="ph5" onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={ph3} alt="" className="ph4" />
  <h2 className="ph7">iPhone 13 Pro</h2>
  <h3 className="ph10">Color: Dark Black</h3>
  <h3 className="ph10">Price: $1099</h3>
</div>    
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 48 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>OS:</strong> IOS 16</h4>
<h4 className="www2"><strong>Chipset:</strong> Apple A16 Bionic </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4323 mAh</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={ph2} alt="" className="ph4" />
  <h2 className="ph7">iPhone 12 Pro Max</h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $999</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 48 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>OS:</strong> IOS 16</h4>
<h4 className="www2"><strong>Chipset:</strong> Apple A16 Bionic </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4323 mAh</h4>
</div>}
       </div>

<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={ph8} alt="" className="ph4" />
  <h2 className="ph7">iPhone 14 Plus</h2>
  <h3 className="ph10">Color: Red</h3>
  <h3 className="ph10">Price: $1399</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 48 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>OS:</strong> IOS 16</h4>
<h4 className="www2"><strong>Chipset:</strong> Apple A16 Bionic </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4323 mAh</h4>
</div>}
        </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={ph9} alt="" className="ph4" />
  <h2 className="ph7">iPhone 14 </h2>
  <h3 className="ph10">Color: Purple</h3>
  <h3 className="ph10">Price: $1299</h3>
</div>  
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 48 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>OS:</strong> IOS 16</h4>
<h4 className="www2"><strong>Chipset:</strong> Apple A16 Bionic </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4323 mAh</h4>
</div>}
   </div>
        </div>
          </div>
}
  </Fade> 




{
showElement2 && <div>
     <div className="ph3">
      <div>
<div className="phh5"  onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={ph10} alt="" className="ph4" />
  <h2 className="ph7">Samsung Galaxy<br/> Z Fold 4</h2>
  <h3 className="ph10">Color: Dark Gray</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="phh5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={ph11} alt="" className="phh4" />
  <h2 className="ph7">Samsung Galaxy S23 Ultra</h2>
  <h3 className="ph10">Color: Purple</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="phh5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={ph12} alt="" className="ph4" />
  <h2 className="ph7">Samsung Galaxy<br/> Z Fold 4 </h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>} 
      </div>
<div>
<div className="phh5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={ph13} alt="" className="phh4" />
  <h2 className="ph7">Samsung Galaxy S23 Ultra </h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $799</h3>
</div>
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}  
      </div>
     </div>
<div className="ph11">
<div>
<div className="phh5"  onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={ph17} alt="" className="ph4" />
  <h2 className="ph7">Samsung Galaxy<br/> S21</h2>
  <h3 className="ph10">Color: Gold</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="phh5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={ph16} alt="" className="phhh4" />
  <h2 className="ph7">Samsung Galaxy <br/> S22+</h2>
  <h3 className="ph10">Color: White</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="phh5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={ph15} alt="" className="ph4" />
  <h2 className="ph7">Samsung Galaxy<br/> S22 </h2>
  <h3 className="ph10">Color: Space Purple</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>} 
      </div>
<div>
<div className="phh5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <img src={ph14} alt="" className="phhh4" />
  <h2 className="ph7">Samsung Galaxy <br/> S22+ </h2>
  <h3 className="ph10">Color: Deep Black</h3>
  <h3 className="ph10">Price: $699</h3>
</div>
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}  
      </div>
    </div>
</div>
}




{
showElement3 && <div>
     <div className="ph3">
      <div>
<div className="ph5"  onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={ph18} alt="" className="ph4" />
  <h2 className="ph7">Huawei Nova P60 Pro</h2>
  <h3 className="ph10">Color: Dark Gray</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={ph19} alt="" className="ph4" />
  <h2 className="ph7">Huawei P60 </h2>
  <h3 className="ph10">Color: Dark Green</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={ph20} alt="" className="ph4" />
  <h2 className="ph7">Huawei Nova 11 </h2>
  <h3 className="ph10">Color: Deep Black</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>} 
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={ph21} alt="" className="ph4" />
  <h2 className="ph7">Huawei Nova 11 </h2>
  <h3 className="ph10">Color: Gray</h3>
  <h3 className="ph10">Price: $799</h3>
</div>
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}  
      </div>
     </div>
<div className="ph11">
<div>
<div className="ph5"  onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={ph22} alt="" className="ph4" />
  <h2 className="ph7">Huawei Nova 8</h2>
  <h3 className="ph10">Color: Blue</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={ph23} alt="" className="phh4" />
  <h2 className="ph7">Huawei Nova 10</h2>
  <h3 className="ph10">Color: Deep Black</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={ph24} alt="" className="ph4" />
  <h2 className="ph7">Huawei Nova 9</h2>
  <h3 className="ph10">Color: Green</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>} 
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <img src={ph25} alt="" className="ph4" />
  <h2 className="ph7">Huawei Nova 9 SE </h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $699</h3>
</div>
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}  
      </div>
    </div>
</div>
}









{showElement4 &&  <div>
     <div className="ph3">
      <div>
<div className="ph5"  onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
  <img src={ph26} alt="" className="ph4" />
  <h2 className="ph7">Xiaomi 12 Pro</h2>
  <h3 className="ph10">Color: Blue</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec5 && <div className='www' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
  <img src={ph27} alt="" className="ph4" />
  <h2 className="ph7">Xiaomi 12 Pro </h2>
  <h3 className="ph10">Color: Dark Black</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec6 && <div className='www' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
  <img src={ph28} alt="" className="ph4" />
  <h2 className="ph7">Xiaomi 11 </h2>
  <h3 className="ph10">Color: Purple</h3>
  <h3 className="ph10">Price: $799</h3>
</div>  
{spec7 && <div className='www' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>} 
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
  <img src={ph29} alt="" className="ph4" />
  <h2 className="ph7">Xiamoi 13 Pro </h2>
  <h3 className="ph10">Color: Dark Black</h3>
  <h3 className="ph10">Price: $799</h3>
</div>
{spec8 && <div className='www' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}  
      </div>
     </div>
<div className="ph11">
<div>
<div className="ph5"  onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
  <img src={ph30} alt="" className="ph4" />
  <h2 className="ph7">Xiaomi 13 Pro</h2>
  <h3 className="ph10">Color: Pink</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec4 && <div className='www' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
  <img src={ph31} alt="" className="ph4" />
  <h2 className="ph7">Xiaomi 13</h2>
  <h3 className="ph10">Color: Green</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec3 && <div className='www' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
  <img src={ph32} alt="" className="ph4" />
  <h2 className="ph7">Xiaomi 12</h2>
  <h3 className="ph10">Color: Blue</h3>
  <h3 className="ph10">Price: $699</h3>
</div>  
{spec2 && <div className='www' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>} 
      </div>
<div>
<div className="ph5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <img src={ph33} alt="" className="ph4" />
  <h2 className="ph7">Xiaomi 13 </h2>
  <h3 className="ph10">Color: Space Black</h3>
  <h3 className="ph10">Price: $699</h3>
</div>
{spec1 && <div className='www' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<h4 className="www3"><strong>Screen:</strong> 6.5"</h4>
<h4 className="www2"><strong>Internal memory:</strong> 256 GB</h4>
<h4 className="www2"><strong>Operating memory:</strong> 4 GB</h4>
<h4 className="www2"><strong>Camera:</strong> 24 MP, 12 MP, 12 MP</h4>
<h4 className="www2"><strong>Front Camera:</strong> 12 MP</h4>
<h4 className="www2"><strong>Android:</strong> Android 12 </h4>
<h4 className="www2"><strong>Network: </strong> 5G </h4>
<h4 className="www2"><strong>Battery:</strong> Li-Ion 4500 mAh</h4>
</div>}  
      </div>
    </div>
</div>
 }






































<div className="ph13">
<h1 className="title">Please go above to look<br/> again  phones</h1> 
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

export default Phone