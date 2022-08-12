import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import ExamplePage from './pages/ExamplePage';
import About from './Features/About';
import Comments from './Features/Comments';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
		
      	<Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='examplepage' element={<ExamplePage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Comments />} />
        </Routes>
    </div>
  );
}

export default App;
