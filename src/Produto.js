import React from 'react';
import { GlobalContext } from './GlobalStorage'
const Produto = () => {
  const { dados, limparDados } = React.useContext(GlobalContext);

  return (
    <div>
      {dados.map(dado => (
        <ul>
          <li key={dado.nome}>{dado.nome}</li>
          <li key={dado.preco}>R$ {dado.preco}</li>
          <li key={dado.descricao}>{dado.descricao}</li>
        </ul>
      ))}
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
};

export default Produto;