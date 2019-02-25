import * as React from 'react';
import { SessionState } from '../../reducers/session';

interface Session {
  LoggedIn: React.FC,
  NotLoggedIn: React.FC,
}

const Session: React.FC<SessionState & Session> = ({ isLoggedIn ,LoggedIn, NotLoggedIn }) => {

  if (isLoggedIn) {
    return (
      <LoggedIn />
    )
  }
  return <NotLoggedIn />
}

export default Session;

