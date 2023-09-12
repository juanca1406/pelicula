
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import inicio from './componentes/paginas/inicio';
import Contacto from './componentes/paginas/Contacto';
import Destacados from './componentes/paginas/Destacados';
import Informacion from './componentes/paginas/Informacion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
         <Route path='/inicio' element={<inicio/>} />
         <Route path='/contacto' element={<Contacto/>} />
         <Route path='/destacados' element={<Destacados/>}/>
         <Route path='/informacion' element={<Informacion/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
