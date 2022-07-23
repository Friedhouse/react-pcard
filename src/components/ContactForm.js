import { Formik, Field, Form } from "formik";
import {Button, Col, FormGroup } from 'reactstrap';

import React from 'react'

export default function ContactForm() {
  return (
    <div>
        <Formik
            initialValues={{
                Name: '',
                Email: '',
                Comments: ''
            }}
        >
            <Form className='row-content'>
                <FormGroup>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='Name' 
                        placeholder='Name'
                    />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='Email' 
                        placeholder='Email'
                    />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md='10'>
                        <Field 
                            className='form-control' 
                            as='textarea' 
                            rows='8' 
                            name='Comments' 
                            placeholder='Comments'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 4}}>
                    <Button className='primary' type='submit'>
                        Send Feedback
                    </Button>
                    </Col>
                </FormGroup>
            </Form>  
        </Formik>
    </div>
  )
}
