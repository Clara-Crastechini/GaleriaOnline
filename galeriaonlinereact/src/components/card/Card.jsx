import React from 'react'
import "./Card.css"
import imgPen from "../../assets/img/pen.svg"
import imgCard from "../../assets/img/gatinho.png"
import imgTrash from"../../assets/img/trash.svg"

const Card = ({tituloCard}) => {
  return (
    <>
        <div className='cardDaImagem'>
            <p>{tituloCard}</p>
            <img className="imgDoCard" src={imgCard} alt="imagem relacionada ao card" />
            <div className='icons'>
                <img src={imgPen} alt="icone para realizar uma alteração" />
                <img src={imgTrash} alt="icone de uma lixeira para realizar uma exclusão" />
            </div>
        </div>
    </>
  )
}

export default Card;