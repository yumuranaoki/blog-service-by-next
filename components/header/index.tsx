import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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

const Header: React.FC<{}> = () => {
  return (
    <div>
      <Links>
        <Li><Link href="/"><Button>Home</Button></Link></Li>
        <Li><Link href="/signup"><Button>Signup</Button></Link></Li>
        <Li><Link href="/login"><Button>Login</Button></Link></Li>
      </Links>
    </div>
  )
}

export default Header;
