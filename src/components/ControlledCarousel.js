import React, { Component ,useState} from 'react'
import { Figure, Spinner, Toast ,Row, Col,Button,Dropdown,Table,Carousel} from 'react-bootstrap'
import g from './images/g.jpg'
import chrown from './images/download.jpg'
import nature2 from './images/nature2.jpg'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div style={{padding:"100px",marginTop:"0px"}}>
      {/* <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img style={{height:"400px"}}
            className="d-block w-100"
            src={g}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"400px"}}
            className="d-block w-100"
            src={nature2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"400px",width:"20px"}}
            className="d-block w-100"
            src={chrown}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      </div>
    );
  }
  
  export default ControlledCarousel