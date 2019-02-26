import * as React from 'react';
import { SessionState } from '../../reducers/session';

interface Session {
  NotLoggedIn: React.FC,
}

const Session: React.FC<SessionState & Session> = ({ isLoggedIn, NotLoggedIn, children }) => {

  if (isLoggedIn) {
    return (
      <div>
        { children }
      </div>
    )
  }
  return <NotLoggedIn />
}

export default Session;

