import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Img1 from '../images/img1.jpg';
import Img5 from '../images/img5.jpg';
import Img3 from '../images/img3.jpg';
import Img4 from '../images/img4.jpg';

export default function TopCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false} interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <ul className="item-titles">
      <li><a href="#home">JONATHAN SIMKHAI</a></li>
      <li><a href="#news">BLAZERS</a></li>
      <li><a href="#contact">VISCOSE</a></li> 
    </ul>
    <p style={{textAlign:"center"}}><strong>A NOTE FROM THE EDITOR</strong></p>
    <h3 style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
      Cum sociis </h3>
      <p style={{textAlign:"center"}}>--- By <u>MINNA SHIM, Fashion Editor</u></p>
    </div>

  );
}

