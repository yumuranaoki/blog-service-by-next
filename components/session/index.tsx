import * as React from 'react';
import { SessionState } from '../../reducers/session';

interface Session {
  NotLoggedIn: React.ReactElement | React.FC
}

const Session: React.FC<SessionState & Session> = ({ isLoggedIn, NotLoggedIn, children }) => {
  if (isLoggedIn) {
    return (
      <div>
        { children }
      </div>
    )
  }
  return (
    <div>
      { NotLoggedIn }
    </div>
  )
}

export default Session;
