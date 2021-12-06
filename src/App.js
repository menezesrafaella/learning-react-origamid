import React, { useState } from 'react';
import Produto from './Produto';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado



const App = () => {
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(null)

  async function handleClick(event) {

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  )
};

export default App;

// ------------------------ UseState ----------------------------------

// // O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.
// const [modal, setModal] = useState(false)

// return (
//   <div>
//     <Modal modal={modal} setModal={setModal} />
//     <ButtonModal setModal={setModal} />
//   </div>
// )
{/* <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Ativo' : 'Inativo'}</button> */ }

// ------------------------ UseState ----------------------------------

// Desafio. Primeira solução:
// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

// const { pathname } = window.location; 

// let Component;
// if (pathname === '/produtos') {
//   Component = Produtos 
//   } else {
//   Component = Home
// }
// return (
//   <div>
//    <Header />
//    <Component />
//   </div>
// )
// Desafio. Segunda solução:
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

