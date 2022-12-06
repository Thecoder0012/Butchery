import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { FrontPageImage } from './components/FrontPageImage';
import { Form } from "./components/Form";




function App() {
return (
<>
  <Navbar /> 

      <Routes>
        <Route path="/" element={[ <Home />]} />
        <Route path="/order" element={<Form/>} />
        <Route path="/products" element={<Products /> }/>
        <Route path="/about" element={<About /> }/>
      </Routes>

      <Footer />
</>
);
}

export default App;