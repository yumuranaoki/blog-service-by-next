import * as React from 'react';
import Header from '../components/header/index';

const DefaultLayout: React.FC<{}> = ({ children, }) => {
  return (
    <div>
      <Header />
      { children }
    </div>
  )
}

export default DefaultLayout;
