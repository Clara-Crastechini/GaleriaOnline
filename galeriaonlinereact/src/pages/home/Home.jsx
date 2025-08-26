import "./Home.css"
import Botao from "../../components/botao/Botao"
import { Navigate, useNavigate } from "react-router-dom"

import React from 'react'


const Home = () => {
  
  const navigate = useNavigate()
  function navegarGaleria(){
    navigate("/galeria")
  }

  return (
    <div className="home">
        <h2 className="org_titulos">Bem-Vindo a</h2>
        <h1 className="org_titulos2">Galeria Online</h1>
        <Botao nomeBotao="Entrar" funcBotao={navegarGaleria}/>
    </div>
  )
}

export default Home;