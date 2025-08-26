import './App.css'
import Galeria from './pages/galeria/Galeria'
import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
        <Routes>
        <Route path="/" element={<Home/>} />
        {/* aqui ele mostra que quando você colocar esse elemento dentro das aspas na url ele vai ir para tal página */}
        <Route path="/galeria" element={<Galeria/>} />
        {/* aqui ele mostra que quando você colocar esse elemento dentro das aspas na url ele vai ir para tal página */}
      </Routes>
    </>
  )
}

export default App
