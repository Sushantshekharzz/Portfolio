import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Navbar from './component/Navbar';
import Contact from './component/Contact';


function App() {
  return (
    <div >
    <Router>
      <Navbar/>
      {/* <Box sx={{marginTop:{sm:20, md:20, xs:2}}}></Box> */}
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/projects'  element={<Projects/>}/>
        <Route path='/resume'  element={<Resume/>}/>
        <Route path='/contact'  element={<Contact/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
