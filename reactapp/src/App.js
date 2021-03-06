//Retorna um array de duas posições
import { useEffect, useState } from 'react';
import List from "./components/List";

function App() {

  useEffect(() => {
    ( async function setUserRepo() {
      await localStorage.setItem('user-repo', JSON.stringify({}))
    })()
  })


   return (
    <div>
      <h1>Dev Front end</h1>
      {/* <List/> */}
      {/* <button onClick={() =>{ }}>Aumenta contador</button> */}
    </div>
  );
}

export default App;
