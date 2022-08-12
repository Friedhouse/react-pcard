import React, { useState, useEffect, useRef } from 'react'
import DocModal from './DocModal';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

export default function Docs({
  database //Prop to receive data for database
}) {

  const [open, setOpen] = useState(false); //Hook to allow button Modal function
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState(''); //State to hold input data
  const collectionRef = collection(database, 'docsdata'); //collection reference for DB
  const isMounted = useRef() //gets rid of concurrent rendering on useEffect
  const [docsData, setDocsData] = useState([]); //state of docsData

//addData will take collection reference and data to DB from input
  const addData = () => {
    addDoc(collectionRef, {
        title: title
    })
    .then(() => {
        alert('Data added')
        handleClose();
    })
    .catch(() => {
        alert('Cannot add data')
    })
  }

//triggered on page load to attach to onSnapShot data through UseEffect hook, setting state to setDocsData
  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      setDocsData(data.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      }))
    })
  };
//Checking if the mount is true, return nothing. Then sets mount to true to call Data once.
  useEffect(() => {
    if (isMounted.current) {
      return
    }
    isMounted.current = true;
    getData()
  }, []);


  return (
    <div className='row-content'>
        <h1>Example Card creation</h1>
        <button 
          className='btn-style' 
          onClick={handleOpen}
          >
            Add a document
        </button>
        <DocModal 
          open={open} 
          setOpen={setOpen}
          title={title}
          setTitle={setTitle}
        >
          <div className='row-content'>
            <button className='btn-style' onClick={addData}>
                Add
            </button>
          </div>  
        </DocModal>

{/* Mapping over array for data to show up in UI */}
        <div className='grid-main'>
          {docsData.map((doc) => {
            return (
              <div className='grid-child'>
                <p>{doc.title}</p>
              </div>
            )
          })}
        </div>    
    </div>
  )
}
