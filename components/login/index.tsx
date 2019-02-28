import * as React from 'react';
import styled from 'styled-components';
import Router from 'next/router'
import { SessionAPI } from '../../api/session';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: papayawhip;
  padding: 0.5em;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px; 
`;

export interface Form {
  name: string,
  email: string,
  password: string,
}

const LoginForm: React.FC<{}> = ({}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (form: Form) => {
    const res = await SessionAPI.create(form);
    if (res.success) {
      Router.push({
        pathname: '/'
      });
    }
  }

  const submit = (form: Form) => {
    setEmail('');
    setPassword('');
    handleSubmit(form);
  }

  return (
    <Container>
      <Input placeholder="Email" type="email" onChange={(event) => setEmail(event.target.value)} />
      <Input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
      <button onClick={() => submit({name, email, password})}>submit</button> 
    </Container>
  )
}

export default LoginForm;