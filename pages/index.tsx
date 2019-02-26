import * as React from 'react';
import DefaultLayout from '../layouts/default';
import Session from '../containers/session';
import Feed from '../containers/feed';

const LoggedIn: React.FC<{}> = () => {
  return (
    <h1>Hello This is Home</h1>
  )
};

const NotLoggedIn: React.FC<{}> = () => {
  return (
    <h1>Not Logged In</h1>
  );
};

const App: React.FC<{}> = () => {
  return (
    <DefaultLayout>
      <Session NotLoggedIn={NotLoggedIn}>
        <Feed />
      </Session>
    </DefaultLayout>
  )
}

export default App;