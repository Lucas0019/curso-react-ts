import { useState, useMemo } from 'react';

const set = new Set()

export default function List() {

    const [contador, setContador]  = useState(0);

    const  nummber =  useMemo(() => 200 * 5,  [])

    // const handleSetContador = useCallback(() => {
    //     setContador((oldContador) => oldContador + 1)
    //     set.add(handleSetContador)
    // }, [])

    // return(
    //     <div>Contador: {contador}
    //         <button onClick={ handleSetContador }>
    //             Aumenta contador
    //         </button>
    //     </div>
    // )
}

//O use Memo é a mesma coisa do useCallback, só que para variaveis