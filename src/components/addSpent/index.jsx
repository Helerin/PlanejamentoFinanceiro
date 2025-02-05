import React from 'react'
import './addSpent.css'

function AddSpent() {
  return (
    <div className='Spent'>
      <form className='SpentContainer'>
        <input type="text" placeholder='Descrição' />

        <input type="text" placeholder='Valor' />

        <input type="date" name="" id=""/>

        <select name="" id="">

          <option disabled value="alimentacao">Escolha uma opção</option>

          <option value="alimentacao">Alimentação</option>
          
          <option value="fixo">Fixo</option>
          
          <option value="imprevisto">Imprevisto</option>
          
          <option value="lazer">Lazer</option>
          
        </select>

        <button type="submit">Adicionar Gasto</button>
      </form>
    </div>
  )
}

export default AddSpent
