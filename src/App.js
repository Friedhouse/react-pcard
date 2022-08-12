import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import About from './Features/About';
import Comments from './Features/Comments';
import { Routes, Route } from 'react-router-dom';
import { database } from './utils/FirebaseDB';
import EditDocs from './components/EditDocs';


function App() {

  return (
    <div>
		
      	<Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='examplepage' element={<ExamplePage database={database} />} />
          <Route path="/editDocs/:id" element={<EditDocs database={database}/>} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Comments />} />
        </Routes>
    </div>
  );
}

export default App;
