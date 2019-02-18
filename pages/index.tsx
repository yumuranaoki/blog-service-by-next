import * as React from 'react';

const App: React.SFC<{}> = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello React</h1>
      <p>Your number is { count }</p>
      <button onClick={() => setCount(count+1)}>increment</button>
    </div>
  )
}

export default App;