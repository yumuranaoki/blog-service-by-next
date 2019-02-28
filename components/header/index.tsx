import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import LogoutButton from '../logout/index';

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  background-color: papayawhip;
  padding: 0.5em 0;
`;

const Li = styled.li`
  margin: 0 20px;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 1em;
  background-color: palevioletred;
  color: white;
`;

interface HeaderProps {
  logoutButton: boolean
}

const LoginOrLogout: React.FC<HeaderProps> = ({ logoutButton }) => {
  if (logoutButton) {
    return <LogoutButton />
  } else {
    return (
      <div>
        <Li><Link href="/signup"><Button>Signup</Button></Link></Li>
        <Li><Link href="/login"><Button>Login</Button></Link></Li>
        <Li><Link href="/login"><Button>Profile</Button></Link></Li>
      </div>
    );
  }
}

const Header: React.FC<HeaderProps> = ({ logoutButton }) => {
  return (
    <div>
      <Links>
        <Li><Link href="/"><Button>Home</Button></Link></Li>
        <LoginOrLogout logoutButton={logoutButton} />
      </Links>
    </div>
  )
}

export default Header;
