import {Routes,Route,Link} from "react-router-dom"
import Home from './components/Home'
import {About} from './components/About'
import {Footer} from './components/Footer'
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { FrontPageImage } from './components/FrontPageImage';
import { Form } from "./components/Form";




function App() {
  return (
    <>      
        
      <Navbar />  
      <FrontPageImage/>
      <Home/>
      <Form/>
      <Footer/>

          <Routes>
            <Route path="/" element/>
            <Route path="/products" element={<Products /> }/>
            <Route path="/about" element={<About /> }/>
          </Routes>

    </>
  );
}

export default App;
