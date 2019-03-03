import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa'
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
    return (
      <Links>
        <Li><Link href="/"><Button>Home</Button></Link></Li>
        <Li><Link href="/login"><Button>Profile</Button></Link></Li>
        <Li><Link href="/add"><Button><FaPlus size={16} color="white" /></Button></Link></Li>
        <LogoutButton />
      </Links>
    )
  } else {
    return (
      <Links>
        <Li><Link href="/signup"><Button>Signup</Button></Link></Li>
        <Li><Link href="/login"><Button>Login</Button></Link></Li>
        <Li><Link href="/add"><FaPlus size={24} color="black" /></Link></Li>
      </Links>
    );
  }
}

const Header: React.FC<HeaderProps> = ({ logoutButton }) => {
  return (
    <div>
      <LoginOrLogout logoutButton={logoutButton} />
    </div>
  )
}

export default Header;
