//Retorna um array de duas posições
import { useEffect, useState } from 'react';
import List from "./components/List";

function App() {

   return (
    <div>
      <h1>Eae Dev, sou um componente</h1>
      <List/>
      {/* <button onClick={() =>{ }}>Aumenta contador</button> */}
    </div>
  );
}

export default App;
