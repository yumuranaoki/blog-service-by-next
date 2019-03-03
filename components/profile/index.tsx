import * as React from 'react';
import styled from 'styled-components';
import { UserAPI } from '../../api/user';

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

export interface UpdateForm {
  name: string
}

const ProfileForm: React.FC<{}> = () => {
  const [name, setName] = React.useState('');
  const submit = async (form: UpdateForm) => {
    try {
      const res = await UserAPI.patch(form)
      if (res.success) {
        // modalを表示
        return
      }
    } catch (error) {
      console.log(error);
      return
    }
  }

  return (
    <Container>
      <Input placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={() => submit({name})}>submit</button> 
    </Container>
  );
}

export default ProfileForm;
