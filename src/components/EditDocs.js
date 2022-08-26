import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { updateDoc, collection, doc } from 'firebase/firestore';
import database from '../App';

export default function EditDocs() {

const [docsDesc, setDocsDesc] = useState(''); //state for quill
let params = useParams(); // Recieves ID from Docs

const getQuillData = (value) => {
  setDocsDesc(value)
}

const collectionRef = collection(database, 'docsData')

//for debouncing
useEffect (() => {
  const updateDocsData = setTimeout(() => {
    const document = doc(collectionRef, params.id)
    updateDoc(document, {
      docsDesc: docsDesc
    })
    .then(() => {
      alert('Saved')
    })
    .catch(() => {
      alert('Cannot Save')
    })
  }, 1000)
  return () => clearTimeout(updateDocsData)
}, [docsDesc])




  return (
    <div>
      <h1>EditDocs</h1>
      <ReactQuill 
        value={docsDesc}
        onChange={getQuillData}
      />
    </div>

  )
}
