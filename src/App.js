import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavBar from './components/SideNavBar.js';
import Introduce from './pages/Introduce.js';
import Carrer from './pages/Carrer.js';
import Skills from './pages/Skills.js';
import Project from './pages/Project.js';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="page-top">
      <SideNavBar/>
      <Container className="container-fluid p-0">
        <Introduce/>
        <hr className="m-0" />
        <Carrer/>
        <hr className="m-0" />
        <Skills/>
        <hr className="m-0" />
        <Project/>
      </Container>
      <a href="https://icons8.com"  style={{position: 'fixed', bottom: 20, left: 20, zIndex: 9999, color: '#343a40'}}>Icons by Icons8</a>
    </div>
  );
}

export default App;
