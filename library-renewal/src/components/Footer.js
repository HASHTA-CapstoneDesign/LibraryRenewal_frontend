import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/logo.svg';
import librarylogo from '../assets/img/librarylogo.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={librarylogo} alt="librarylogo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2023. HashTag. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
