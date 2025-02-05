import React from 'react'
import './cardspent.css'

function CardSpent(props) {
  return (
    <div className='CardSpent'>
        <h1>{props.description}</h1>
        <p>Valor: ${props.value}</p>
        <p>Data: {props.date} </p>
        <p>Categoria: {props.category}</p>
    </div>
  )
}

export default CardSpent
