import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, Counter } from './test.styles';

type Props = {
  id: string
}

const TestPage = () => {
  const [ count, setCount ] = useState(0);
  const { id }: Props = useParams();

  return (
    <Wrapper>
      <h1>Page {id}</h1>
      <div>
        Counter: <Counter>{count}</Counter>
      </div>
    </Wrapper>
  )
}

export default TestPage;
