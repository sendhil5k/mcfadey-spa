import React,{useState} from "react";
import thumb1 from '../images/thumb1.jpg';
import thumb2 from '../images/thumb2.jpg';

export default function ItemList(){
    const sizeGuid=()=>{
        alert("sizeGuid");
    }
    const addBag=()=>{
        alert("addBag clicked");
    }
    
    const [fix, setFix] = useState(false);
    function setFixedSidebar(){
    if(window.scrollY >=300){
        setFix(true)
        }else{
        setFix(false)
    }
    }
    window.addEventListener("scroll", setFixedSidebar);
    
return(
    <div className={fix ? 'right-panel fixed':'right-panel'}>
    <h1>JONATHAN SIMKHAI</h1>
          <p>Lurex Linen viscose Jacket in Conchiglia</p>
          <p className="price-label"><strong>$225</strong></p>
          <div className="color-panel">
              <p><strong>COLOR</strong> CONCHIGLIA</p>
              <p><img src={thumb1} alt="" />  <img src={thumb2} alt="" /></p>
          </div>
          <div className="size-panel">
              <span><strong>SIZE</strong> L</span>
              <span className="size-guide" onClick={sizeGuid}>SIZE GUIDE</span>
          </div>
          <div className="size-list">
              <a href="#">XS</a>
              <a href="#">S</a>
              <a href="#" className="not-available">M</a>
              <a href="#">L</a>
              <a href="#">XXL</a>
          </div>
          <button className="primery-btn" onClick={addBag}>ADD TO BAG --&gt;</button>
          <p style={{marginBottom:"10px"}}>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
          <p>Speak to a Personal Stylist CHAT NOW</p>
    </div>
)
}