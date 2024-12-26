import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Resume from './component/Resume';

function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/projects'  element={<Projects/>}/>
        <Route path='/resume'  element={<Resume/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
