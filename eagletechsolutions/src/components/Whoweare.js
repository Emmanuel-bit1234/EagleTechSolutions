import {React, useEffect, useState} from "react";
import {Container, Row, Col, useAccordionButton} from "react-bootstrap";
import bgImg2 from "../components/img/bg-img2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Whoweare = ()=>{
  useEffect(() => {
    AOS.init({
      duration: 800, // Set animation duration
    });
  }, []);
    return(
      <div class="container" id="whoweare">
  <div class="black-box" data-aos="fade-right">
  <h1>Who we are</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>         
  </div>
  <div class="green-box" data-aos="fade-left"><img src={bgImg2} alt="img"/></div>
</div>
      
    )
}