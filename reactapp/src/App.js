//Retorna um array de duas posições
import { useState } from 'react';

function App() {

  // Desestruturação
  const [contador, setContador]  = useState(0);

  //Aqui nesse caso ele levará 2 segundos para atualizar o contador
  //com a quantidade de clicks efetuadas anteriomente 
   function mudaContador() {
    setTimeout(() => {
      //OldContador é o estado da aplaicação anterior ao click
      setContador((oldContador) => oldContador + 5);
    }, 2000);
  }

   return (
    <div>
      <h1>Eae Dev, sou um componente</h1>
      Contador: {contador}
      <button onClick={mudaContador}>Aumenta contador</button>
    </div>
  );
}

export default App;
