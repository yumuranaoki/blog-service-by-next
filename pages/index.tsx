import * as React from 'react';
import DefaultLayout from '../layouts/default';
import Session from '../containers/session';

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
      <Session LoggedIn={LoggedIn} NotLoggedIn={NotLoggedIn} />
    </DefaultLayout>
  )
}

export default App;