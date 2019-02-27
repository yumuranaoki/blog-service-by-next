import * as React from 'react';
import DefaultLayout from '../layouts/default';
import Session from '../containers/session';
import Feed from '../containers/feed';
import Main from '../components/main/index';

const App: React.FC<{}> = () => {
  return (
    <DefaultLayout>
      <Session NotLoggedIn={Main}>
        <Feed />
      </Session>
    </DefaultLayout>
  )
}

export default App;