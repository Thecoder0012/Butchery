import './App.css';
import {Routes,Route,Link} from "react-router-dom"
import {Home} from './components/Home'
import {About} from './components/About'
import {Footer} from './components/Footer'

function App() {
  return (
    <>      
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="about">About</Link>
            </li>
          </ul>


          <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/about" element={<About /> }/>
          </Routes>
      <Footer/>
    </>
  );
}

export default App;
