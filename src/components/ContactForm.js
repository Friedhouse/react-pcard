import { Formik, Field, Form, ErrorMessage } from "formik";
import {Button, Col, FormGroup } from 'reactstrap';
import React from 'react'

export default function ContactForm() {

    const handleSubmit = (values, {resetForm}) => {
        console.log('form-values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    const validateEmail = (values) => {
        const errors = {};
        if (!values.email.includes('@')) {
            errors.email = 'Email should contain an @ symbol'
        }
        return errors;
    }

  return (
    <div>
        <Formik
            initialValues={{
                Name: '',
                Email: '',
                Comments: ''
            }}
            onSubmit={handleSubmit}
            validate={validateEmail}
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
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
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
                        Submit
                    </Button>
                    </Col>
                </FormGroup>
            </Form>  
        </Formik>
    </div>
  )
}
