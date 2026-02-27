import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Workshops from './pages/Workshops';
import Donate from './pages/Donate';
import './App.css';

function Layout() {
  return (
    <>
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
