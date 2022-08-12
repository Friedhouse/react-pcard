import React from 'react'
import Docs from '../components/Docs';
import { app, database } from '../utils/FirebaseDB';

export default function ExamplePage() {
  return (
    <div>
      <Docs database={database} />
    </div>
  )
}
