import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../components/img/linkedin.png";
import mail from "../components/img/mail.png";
import instagram from "../components/img/instagram.png";
import whatsapp from "../components/img/whatsapp.png";
import EagleTechLogo from "../components/img/EagleTechlogo.png"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={EagleTechLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""><img src={linkedin} alt="Icon" /></a>
              <a href=""><img src={mail} alt="Icon" /></a>
              <a href=""><img src={instagram} alt="Icon" /></a>
              <a href=""><img src={whatsapp} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}