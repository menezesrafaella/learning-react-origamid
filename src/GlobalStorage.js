import React from 'react';
export const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  function limparDados() {
    setDados(null)
  }

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [dados]);

  if (dados === null) return null;
  return (
    <GlobalContext.Provider value={{ dados, limparDados, setDados }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStorage;