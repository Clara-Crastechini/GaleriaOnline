import Home from "../pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Galeria from "../pages/galeria/Galeria";


const Rotas = ()  => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/galeria" element={<Galeria/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;