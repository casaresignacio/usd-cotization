import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'

export const Footer = () => (
  <div className="container-footer">
    <Container>
      <Row>
        <Col>
          
          <p className="footer-disclaimer">
            &copy;{new Date().getFullYear()} Ignacio Casares | All rights reserved |
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

