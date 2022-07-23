import { Container, Row, Col } from 'reactstrap';
import React from 'react'

export default function About() {
  return (
    <div>
        <Container id='about'>
            <Row className='row-content'>
                <Col className='my-auto mx-auto col-xs-12 col-sm-5'>
                    <h3>Why use our preference card app?</h3>
                    <p className='p-body'>
                    We are trying to create a way to simplify the process of preference cards. Giving you full control over what you, or your team create; to allow safer and more effective teamwork in the medical setting.
                    </p>
                </Col>
                <Col className='my-auto mx-auto'>
                    <img className='medical-img' src='./shared/images/surgical-hands.png' width='100%' alt='Surgical instrument handling' />
                </Col>
            </Row>
        </Container>

    </div>
  )
}
