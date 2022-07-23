import { Container, Row, Col } from 'reactstrap';
import React from 'react'
import ContactForm from '../components/ContactForm';

export default function Comments() {
  return (
    <div>
        <Container id='contact'>
            <Row className="row-content">
                <Col className='col-12'>
                    <h3>Get In Touch</h3>
                </Col>
                <Col className='col-11 mt-4 mx-auto'>
                <p>Questions, comments, or would you like to see a certain feature? Shoot myself and the team a message below and let us know. If you just want to let us know how much you love the app, that's cool too.</p>
                </Col>
            </Row>
            <ContactForm />
        </Container>
    </div>
  )
}
