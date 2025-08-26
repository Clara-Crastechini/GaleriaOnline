import React from 'react'
import "./BOtao.css"

const Botao = ({nomeBotao , funcBotao}) => {
  return (
   <button className='botao' onClick={funcBotao} type='submit'>
    {nomeBotao}
   </button>
  )
}

export default Botao