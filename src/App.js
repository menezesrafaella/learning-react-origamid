import React from 'react';

const persona = {
  client: 'Mario',
  age: 31,
  shop: [
    { name: 'Notebook', price: 'R$ 2500'},
    { name: 'Frezzer', price: 'R$ 3000'},
    { name: 'Smartphone', price: 'R$ 1500'},
  ],
  situation: false,
}



const App = () => {
  const data = persona;

  const total = data.shop.map(item => Number(item.price.replace('R$ ', ''))).reduce((a,b) => a + b);
  
  return (
  <>
    <p>Nome: {data.client}</p>
    <p>Idade: {data.age}</p>  
    <p> Total gasto: { total }</p>
    <p>Situação: <span style={{ color: data.situation ? 'green' : 'red'  }}>{data.situation ? 'Ativa' : 'Inativa'}</span> </p> 
    { total > 5000 && <p>Voce está gastando muito</p> }
  </> //React.Fragment
  )
}

// JSX é um javascript estendido, dando a ele novas funcionalidades, e depois sao convertidos para react.
// className -> class e htmlFor -> for (label)

export default App;