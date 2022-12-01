import {Routes,Route,Link} from "react-router-dom"
import Home from './components/Home'
import {About} from './components/About'
import {Footer} from './components/Footer'
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { FrontPageImage } from './components/FrontPageImage';




function App() {
  return (
    <>      
        
          <Navbar />

          <Routes>
            <Route path="/" element/>
            <Route path="/products" element={<Products /> }/>
            <Route path="/about" element={<About /> }/>
          </Routes>

          <FrontPageImage/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
