import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PHome from './pages/PHome/PHome';
import PEndereco from './pages/PEndereco/PEndereco';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PHome />} />
          <Route path='/endereco' element={<PEndereco/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
