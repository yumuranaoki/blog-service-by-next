import * as React from 'react';
import Header from '../components/header/index';

const DefaultLayout: React.SFC<{}> = (props) => {
  return (
    <div>
      <Header />
      { props.children }
    </div>
  )
}

export default DefaultLayout;
