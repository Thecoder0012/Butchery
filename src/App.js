import {Routes,Route,Link} from "react-router-dom"
import {Home} from './components/Home'
import {About} from './components/About'
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';

function App() {
  return (
    <>      
        
          <Navbar />

          <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/products" element={<Products /> }/>
            <Route path="/about" element={<About /> }/>
          </Routes>
      
    </>
  );
}

export default App;
