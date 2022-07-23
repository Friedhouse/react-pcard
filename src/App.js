import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './Features/Navbar';
import ExampleCard from './Features/ExampleCard';
import About from './Features/About';
import Comments from './Features/Comments';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
		<Navigation />
      	<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='examplecard' element={<ExampleCard />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Comments />} />
        </Routes>
    </div>
  );
}

export default App;
