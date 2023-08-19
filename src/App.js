import Jigsaw from "./components/Jigsaw";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Cross } from "./components/Cross";
import { Matchingpairs } from "./components/Matchingpairs";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './App.css';
import {FcPuzzle} from 'react-icons/fc';
function App() {
  return (   
    <div className="App">
    {/* <Navbar className="text-center" bg="dark" variant="dark">
    <Navbar.Brand href="/" className="me-auto navbar"><b>Puzzle</b></Navbar.Brand>
        <Container className='a text-center'>
          
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/matchingpairs">Matchingpairs</Nav.Link>
            <Nav.Link href="/jigsaw">Jig Saw</Nav.Link>
            <Nav.Link href="/crossword">Crossword</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <div className="homenavbar">
      <Nav.Link href='/'><h3><FcPuzzle/><b>Puzzle game</b></h3></Nav.Link>
      </div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/jigsaw" element={<Jigsaw />} />
          <Route path="/cross" element={<Cross />} />
          <Route path="/matchingpairs" element={<Matchingpairs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
