import * as React from 'react';
import styled from 'styled-components';
import { Form } from '../../actions/signup'
import { signupActions } from '../../containers/signup';

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

const SignupForm: React.FC<typeof signupActions> = ({ handleSubmit, }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
  const submit = (form: Form) => {
    handleSubmit(form)
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  }

  return (
    <Container>
      <Input placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
      <Input placeholder="Email" type="email" onChange={(event) => setEmail(event.target.value)} />
      <Input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
      <Input placeholder="Password Confirmation" type="password" onChange={(event) => setPasswordConfirmation(event.target.value)} />
      <button onClick={() => submit({name, email, password, passwordConfirmation})}>submit</button> 
    </Container>
  )
}

export default SignupForm;
