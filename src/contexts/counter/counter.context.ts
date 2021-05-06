import { createContext } from 'react';

type Value = {
    count: number
}

const CounterContext = createContext<Value>({
    count: 0
});

export default CounterContext;
