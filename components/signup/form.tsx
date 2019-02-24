import * as React from 'react';
import styled from 'styled-components';
import { State } from '../../reducers/signup/form';
import { formActions } from '../../actions/signup/form'

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

const SignupForm: React.SFC<typeof formActions> = ({ handleSubmit, }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  return (
    <Container>
      <Input placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
      <Input placeholder="Email" type="email" onChange={(event) => setEmail(event.target.value)} />
      <Input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
      <Input placeholder="Password Confirmation" type="password" onChange={(event) => setPasswordConfirmation(event.target.value)} />
      <button onClick={() => handleSubmit({name, email, password, passwordConfirmation})}>submit</button> 
    </Container>
  )
}

export default SignupForm;
