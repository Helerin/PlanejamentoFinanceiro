import React from 'react'
import './addSpent.css'

function index() {
  return (
    <div className='Spent'>
      <form className='SpentContainer'>
<<<<<<< HEAD
        <input type="text" placeholder='description' />

        <input type="text" placeholder='Price'/>
=======
        <input type="text" placeholder='Descrição' />

        <input type="text" placeholder='Valor' />
>>>>>>> ee8415fc13257af8d39927212d69fda90738cad3

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
