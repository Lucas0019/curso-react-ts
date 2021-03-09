//Retorna um array de duas posições
import { useState } from 'react';
import api from './services/api';
// import List from "./components/List";

function App() {

  // bind : conectar o valor do estado ao valor do produto
  const [userName, setUserName] = useState('Lucas0019');
  const [userData, setUserData] = useState({});

  //Usando nosso serviço de API
  async function getUserGithubData() {
    const { data } = await api.get(userName)

    setUserData(data)
  }

   return (
    <div>
      <h1>Github consulta</h1>
      <input 
        type="text" 
        value={userName} 
        onChange={(event) => setUserName(event.target.value)}
      />

      <button onClick={getUserGithubData}>Pesquiar</button>

      {/* Resultados da busca da API */}
      {/* <div>{userData.avatar_url}</div> */}

      <section>
        <div>{userData.name}</div>
        <div>{userData.company}</div>
        <div>{userData.location}</div>
      </section>
      
    </div>
  );
}



export default App;
