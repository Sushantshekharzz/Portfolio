import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import About from './component/about/About';
// import Projects from './component/project/Projects';
// import Resume from './component/resume/Resume';
// import Navbar from './component/Navbar';
// import Contact from './component/Contact';
// import Footer from './component/Footer';
import NotFound from './component/NotFound';



function App() {
  return (
    <div className="custom-scroll"  >
      <Router>
        {/* <Navbar /> */}
        {/* <Box sx={{marginTop:{sm:20, md:20, xs:2}}}></Box> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/projects'  element={<Projects/>}/>
        <Route path='/resume'  element={<Resume/>}/>
        <Route path='/contact'  element={<Contact/>}/> */}
          <Route path="*" element={<NotFound />} /> {/* Optionally, use a custom 404 page */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
