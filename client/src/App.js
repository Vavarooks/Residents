import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './views/Home'
import Contact from './views/Contact'
import About from './views/About'
import Services from './views/Services'
import FAQ from './views/Faq'

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Apple Wood Residents</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/'}><h5>Home</h5></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about'}><h5>About</h5></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/services'}><h5>Services</h5></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/faq'}><h5>FAQ</h5></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/contact'}><h5>Contact Us</h5></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/faq' element={<FAQ/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;