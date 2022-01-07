import React from 'react';
import Radio from './Components/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];


const Questions = () => {
  const [answer, setAnswer] = React.useState('')
  return (
    <form>
      {perguntas.map(question => (
        <><h1>{question.pergunta}</h1><Radio
          id={question.id}
          options={question.options}
          value={answer}
          setValue={setAnswer}
        /><button>Enviar</button></>
      ))}
    </form>


  )
}

export default Questions
