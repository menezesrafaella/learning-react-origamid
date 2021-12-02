import React from 'react'
import Titulo from '../Titulo/Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map(({ nome, propriedades }) => (
        <div style={{ border: '1px solid black' }}>
          <p>{nome}</p>
          <ul>
            {propriedades.map(propriedade => (
              <li>{propriedade}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>

  )
}

export default Produtos
