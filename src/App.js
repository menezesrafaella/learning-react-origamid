import React from 'react';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// Mostre uma mensagem na tela, caso a resposta da API seja positiva


const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: ''
  });

  const [response, setResponse] = React.useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleCepClick(event) {
    event.preventDefault();
    fetch(`https://viacep.com.br/ws/${form.cep}/json/`).then(
      response => {
        response.json().then(data => {
          console.log(data)
          setForm({
            ...form,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          })
        })
      });
  }


  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep</label>
      <input
        type="text"
        id="cep"
        value={form.cep}
        onChange={handleChange}
      />
      <button onClick={handleCepClick}>Validar CEP</button>
      <label htmlFor="rua">Rua</label>
      <input
        type="text"
        id="rua"
        value={form.rua}
        onChange={handleChange}
      />
      <label htmlFor="numero">Número</label>
      <input
        type="number"
        id="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      />
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado</p>}
    </form>
  );
};

export default App;


// ------------ Use Memo -------------

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

// const App = () => {
//   const [contar, setContar] = React.useState(0);
//   const valor = React.useMemo(() => {
//     const localStorageItem = window.localStorage.getItem('produto');
//     // só será executado uma vez
//     console.log('teste');
//     return localStorageItem;
//   }, []);
//   console.log(valor);

//   return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
// };
// export default App;
// -------------- Use Ref --------
// Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento.
// Geralmente usamos o mesmo para se referir a um elemento do DOM, sem precisar utilizar o query selector ou algo similar.



// ------------ useEffect ------------------------------
// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


// Todo componente possui um ciclo de vida. Os principais momentos acontecem quando um componente é renderizado, atualizado ou destruído. com o React
// useEffect() podemos definir um callback que irá ser executado durante certos momentos de vida do componente

// const App = () => {
//   const [produto, setProduto] = React.useState(null);

//   React.useEffect(() => {
//     const produtoLocal = window.localStorage.getItem('produto');
//     if (produtoLocal !== 'null') setProduto(produtoLocal);
//   }, []);

//   React.useEffect(() => {
//     if (produto !== null) window.localStorage.setItem('produto', produto);
//   }, [produto]);

//   function handleClick({ target }) {
//     setProduto(target.innerText);
//   }

//   return (
//     <div>
//       <h1>Preferência: {produto}</h1>
//       <button style={{ marginRight: '1rem' }} onClick={handleClick}>
//         notebook
//       </button>
//       <button onClick={handleClick}>smartphone</button>
//       <Produto produto={produto} />
//     </div>
//   );
// };

// export default App;




// ------------------------------------------------------


// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado



// --------------------- Use State Desafio ---------------------------------------

// const App = () => {
//   const [dados, setDados] = useState(null)
//   const [carregando, setCarregando] = useState(null)

//   async function handleClick(event) {

//     const response = await fetch(
//       `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
//     );
//     const json = await response.json();
//     setDados(json);
//     setCarregando(false);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Tablet</button>
//       <button onClick={handleClick}>Smartphone</button>
//       <button onClick={handleClick}>Notebook</button>
//       {carregando && <p>Carregando...</p>}
//       {!carregando && dados && <Produto dados={dados} />}
//     </div>
//   )
// };

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

