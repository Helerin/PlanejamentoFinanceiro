import React from 'react'
import './addSpent.css'

function index() {
  return (
    <div className='Spent'>
      <form className='SpentContainer'>
        <input type="text" placeholder='Descrição' />

        <input type="text" placeholder='Preço'/>

        <input type="date" name="" id="" />

        <select name="" id="">

          <option disabled value="alimentacao">Escolha uma opção</option>

          <option value="alimentacao">Alimentação</option>
          
          <option value="fixo">Fixo</option>
          
          <option value="imprevisto">Imprevisto</option>
          
          <option value="lazer">Lazer</option>
          
        </select>

        <button type="submit"></button>
      </form>
    </div>
  )
}

export default index
