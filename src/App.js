import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Produtos from './Produtos/Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


const App = () => {
  const { pathname } = window.location; 

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos 
    } else {
    Component = Home
  }
  return (
    <div>
     <Header />
     <Component />
    </div>
  )
};

export default App;

// Desafio. Uma solução:
{/* { <div>
  { pathname === '/produtos' ? <div><Produtos /></div> : <div><Home /></div> }
</div>}  */}



/* --------------------------- Aula sobre propriedades --------------------
// const Titulo = ({cor, texto, children}) => {
//   return <h1 style={{color: cor}}>{texto}</h1>
// }

 { <Titulo cor="red" texto="Meu titulo" />
<Titulo cor="blue" texto="Meu titulo" />
<Titulo cor="yellow" texto="Meu titulo"> Children</Titulo> }
--------------------------- Aula sobre propriedades -------------------- */

// --------------------------- Aula de JSX - Array --------------------------------- 
// Mostre apenas produtos que forem mais caros que R$ 1500
// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];
// Primeira solução:
// const dados = produtos.filter((produto) =>
// Number(produto.preco.replace('R$ ', '')) > 1500)
// console.log(dados)


// <section>
//   {dados.map(({ id, nome, preco, cores }) => (
//     <div key={id}>
//       <h1>{nome}</h1>
//       <p>Preço: {preco} </p>
//       <ul>
//         {cores.map(cor => (
//           <li key={cor} style={{ color: 'white', backgroundColor: cor }}>{cor}</li>
//         ))}
//       </ul>
//     </div>
//   ))}

// </section>
// Segunda solução:
// produtos.filter((produto) =>
//   Number(produto.preco.replace('R$ ', '')) > 1500
// ).map(produto => (
//   <div key={produto.id}>
//     <h1>{produto.nome}</h1>
//     <p>Preço: {produto.preco}</p>
//     <ul>
//       {produto.cores.map((cor) => (
//         <li key={cor} style={{ color: 'white', backgroundColor: cor }}> {cor} </li>
//         ))}
//     </ul>
//   </div>
// ))}


// O JSX necessita de uma key única para cada elemento da Array
// Ex: <li key="e1">Apple</li>
// const filmes = ['Harry Potter - A pedra filosofal', 'Harry potter - A camara secreta', 'Harry potter - O prisioneiro de Azkaban']

// return (
//   <ul>
//     {filmes.map(filme => {
//       return <li key={filme}>{filme}</li>
//     }) }
//   </ul>
// )

// --------------------------- Aula de JSX - Array --------------------------------- 


// --------------------------- Aula de JSX - 2 --------------------------------- 
// const data = persona;

// const total = data.shop.map(item => Number(item.price.replace('R$ ', ''))).reduce((a,b) => a + b);

// return (
// <>
//   <p>Nome: {data.client}</p>
//   <p>Idade: {data.age}</p>  
//   <p> Total gasto: { total }</p>
//   <p>Situação: <span style={{ color: data.situation ? 'green' : 'red'  }}>{data.situation ? 'Ativa' : 'Inativa'}</span> </p> 
//   { total > 5000 && <p>Voce está gastando muito</p> }
// </> //React.Fragment
// )

// JSX é um javascript estendido, dando a ele novas funcionalidades, e depois sao convertidos para react.
// className -> class e htmlFor -> for (label)
// --------------------------- Aula de JSX - 2 --------------------------------- 

// --------------------------- Aula de JSX - 2 --------------------------------- 
// const persona = {
//   client: 'Mario',
//   age: 31,
//   shop: [
//     { name: 'Notebook', price: 'R$ 2500'},
//     { name: 'Frezzer', price: 'R$ 3000'},
//     { name: 'Smartphone', price: 'R$ 1500'},
//   ],
//   situation: false,
// }
// --------------------------- Aula de JSX - 2 --------------------------------- 

