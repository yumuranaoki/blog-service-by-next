import * as React from 'react';
import Header from '../components/header/index';

interface DefaultLayoutProps {
  logoutButton: boolean
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, logoutButton}) => {
  return (
    <div>
      <Header logoutButton={logoutButton}/>
      { children }
    </div>
  )
}

export default DefaultLayout;
