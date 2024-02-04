import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../components/img/contact-img.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import linkedin from "../components/img/linkedin.png";
import mail from "../components/img/mail.png";
import instagram from "../components/img/instagram.png";
import whatsapp from "../components/img/whatsapp.png";
export const Contact= ()=>{
    const formInitialDetails= {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message:''
    }
    const [formDetails, setFormDetails]= useState(formInitialDetails);
    const[buttonText, setButtonText]= useState('Send');
    const[status, setStatus]= useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Sending...");
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code == 200) {
        setStatus({ succes: true, message: 'Message sent successfully'});
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      }
      
    };
    useEffect(() => {
      AOS.init({
        duration: 2000, // Set animation duration
      });
    }, []);
    return(
        <section className="contact" id= "contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                        {/* <div className="contact-txt">
                          <p>Email: Kchristi546@gmail.com</p>
                          <p>
                            Phone: +27 614 534 484
                          </p>
                        </div> */}
                         </Col>
                        <Col md={6}>
                            <h2>Get in touch</h2>
                            <form onSubmit={handleSubmit}>
                  <Row data-aos="zoom-in-left">
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
                        </Col>
                </Row>
            </Container>
        </section>
    )
}