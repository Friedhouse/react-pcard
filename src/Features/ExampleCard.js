import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Modal, Input, ModalBody, ModalHeader } from 'reactstrap';



const ExampleCard = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([
        {itemName: 'Bovie', quantity: 1},
        {itemName: 'Suction', quantity: 1},
        {itemName: 'Raytechs', quantity: 3}
    ])

    const toggle = () => setModalOpen(!modalOpen);

    //giving user input functionality
    const handleAddButtonOnClick = () => {
        const newItem = {
            itemName: inputValue,
            quantity: 1
        }
        const newItems = [...items, newItem]; //copies exsisting array to avoid mutating state
            setItems(newItems); //new array into state
            setInputValue(''); //resets input
    }

    const handleQuantityIncrease = (index) => {
        const newItems = [...items]; //copies exsisting array
        newItems[index].quantity++; //uses index to get the object then increases
        setItems(newItems); //new array into state
    }
    const handleQuantityDecrease = (index) => {
        const newItems = [...items]; //copies exsisting array
        newItems[index].quantity--; //uses index to get the object then decreases
        setItems(newItems); //new array into state
    }
    
    return (
        <div>
            <h1 className='feature-heading'>Example Preference Card</h1>
            <Button 
                color='primary' 
                className='mt-5'
                onClick={toggle}
            >
                Add preference
            </Button>
            <Modal
                backdrop={false}
                fullscreen
                isOpen={modalOpen} toggle={toggle}
            >
                <ModalHeader>
                    <Input
                        placeHolder='Card Title'
                    />
                </ModalHeader>
                <ModalBody>
                    <Input 
                        className='item-input'
                        placeholder='Add an item...'
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        
                    />
                    <Button 
                        color='primary'
                        className='mt-2' 
                        onClick={() => handleAddButtonOnClick()}
                    >
                        Submit
                    </Button>
                    <Container className='item-list'>
                        {items.map((item, index) => (
                            <Row>
                                <Col>
                                    {item.itemName}
                                </Col>
                                <Col>
                                    {item.quantity}
                                </Col>
                                <Col>
                                    <Button
                                        color='primary'
                                        onClick={() => handleQuantityIncrease(index)}
                                    >
                                        +
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        color='primary'
                                        onClick={() => handleQuantityDecrease(index)}
                                    >
                                        -
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                    </Container>
                </ModalBody>
            </Modal>
        </div>
    )
}   

export default ExampleCard;