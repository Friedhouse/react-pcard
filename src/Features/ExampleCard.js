import React, { useState } from 'react';
import { Button } from 'reactstrap';
import ExampleModal from '../utils/ExampleModal';



const ExampleCard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <div>
            <h1 className='feature-heading'>Example Preference Card</h1>
            <Button 
                color='primary' 
                className='mt-5'
                onClick={() => {
                    setModalOpen(!modalOpen)
                }}
            >
                Add preference
            </Button>
            <ExampleModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    )
}   

export default ExampleCard;