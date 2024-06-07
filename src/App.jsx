
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import "./App.css";

// Importing the components
import NoPage from './pages/NoPage';
import Main from './pages/main/Main';
import Gallery from './pages/gallery/Gallery';
import Projects from './pages/projects/Projects';
import Nav from './pages/Nav';
import Footer from './pages/footer/Footer';




function App() {
  return (
    <Router>
      <div className='container'>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
