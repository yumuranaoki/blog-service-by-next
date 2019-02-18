import * as React from 'react';
import DefaultLayout from '../layouts/default'
import Counter from '../containers/counter'

const App: React.SFC<{}> = () => {
  return (
    <DefaultLayout>
      <h1>Hello This is Home</h1>
      <Counter />
    </DefaultLayout>
  )
}

export default App;