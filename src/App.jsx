import './App.css';
import Inicio from './pages/menu/inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
          <Route path="/inicio" element={<inicio/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
