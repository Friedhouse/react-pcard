import { useState } from 'react';
import { Modal, Input, ModalBody, ModalHeader } from 'reactstrap';

const ExampleModal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <Modal
                backdrop={false}
                fullscreen
                onClick={() => {
                    {setModalOpen(!modalOpen)}
                }}
            >
                <ModalHeader>
                    <Input 
                        placeHolder='Card Title'
                    />
                </ModalHeader>
                <ModalBody>
                    
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ExampleModal;