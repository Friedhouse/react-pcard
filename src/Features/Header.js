import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Header = () => {
    return(
        <>
        <Container className='top-header'>
            <header>
                <Row mx-5>
                    <Col mt-5>
                        <h1>Beyond the Scalpel</h1>
                        <p className="text-heading"> Understanding the needs of our Doctor's and Surgeon's is paramount to becoming effective healthcare providers in the medical setting. This preference card app can help.</p>
                    </Col>
                </Row> 
            </header>
            <Button 
                type='button'
                color='primary' 
                onClick={() => {
                    window.location.href='/examplecard'
                }}
            
            >
            Try Now
            </Button>
        </Container>
        </>
        
    )
}

export default Header;