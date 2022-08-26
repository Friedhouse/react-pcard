import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px, solid #000',
    boxShadow: 24,
    p: 4,
};

export default function DocModal({
    open, //Props passed from docs.js for modal function
    setOpen,
    title, //Props pass from docs.js for modal input
    setTitle
}) {
    const handleClose = () => setOpen(false); //allows closure of Modal
   
  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box sx={style}>
                <input 
                    placeholder='Add the Title'
                    className='add-input'
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                />
                <div className='row-content'>
                    <button className='btn-style'>
                        Add
                    </button>
          </div>  
            </Box>
        </Modal>
    </div>
  )
}
