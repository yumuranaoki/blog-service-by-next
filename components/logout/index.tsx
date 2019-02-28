import * as React from 'react';
import styled from 'styled-components';
import Router from 'next/router'
import { SessionAPI } from '../../api/session';

const Button = styled.button`
  border-radius: 3px;
  padding: 1em;
  background-color: palevioletred;
  color: white;
  margin: 0 20px;
`;

const LogoutButton: React.FC<{}> = () => {
  const logout = async () => {
    try {
      await SessionAPI.destroy(); 
    } catch (error) {
      console.log(error);
      return
    }

    Router.push({
      pathname: '/'
    });
  };

  return (
    <Button
      onClick={() => logout()}
    >
      Logout
    </Button>  
  );
}

export default LogoutButton;
