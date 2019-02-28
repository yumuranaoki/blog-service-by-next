import * as React from 'react';
import styled from 'styled-components';

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

const ProfileForm: React.FC<{}> = () => {
  const [name, setName] = React.useState('');

  return (
    <Container>
      <Input placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
    </Container>
  );
}

export default ProfileForm;
