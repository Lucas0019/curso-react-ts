import { useEffect, useState } from 'react';

export default function List() {
    const [contador, setContador]  = useState(0);

    useEffect(() => {
        console.log('ATUALIZAOU 🙂');
    }, [contador]); 

    return(
        <div>Contador: {contador}
            <button onClick={() => setContador((oldContador)=> oldContador + 1)}>
                Aumenta contador
            </button>
        </div>
    )
}