function useState<S extends number | string = string>(initialState?: S) {
  let state = initialState;

  function setState(newState: S) {
    state = newState;
    return state;
  }

  return { state, setState };
}

// const [count, setCount] = useState(10);
// console.log(count);

const state = useState<number>(10);

// console.log(state.setState('text')); // Error: 'text' is not a number
console.log(state.setState(10));
