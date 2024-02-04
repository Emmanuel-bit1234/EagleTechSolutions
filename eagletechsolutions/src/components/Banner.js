import {React,useState, useEffect} from "react";
import {Container, Row, Col, useAccordionButton} from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Banner = ()=>{
    useEffect(() => {
        AOS.init({
          duration: 20000, // Set animation duration
        });
      }, []);
    return(
        <section className="banner" id="home"> 
        <Container >
            <Row className="align-items-center" data-aos="zoom-in">

                    <div >
                    <span className="tagline">Welcome to</span>
                    <h1>Eagle Tech Solutions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <button className="vvd"><span>Learn more</span></button>
 </Row>
        </Container>
        </section>
    )
}