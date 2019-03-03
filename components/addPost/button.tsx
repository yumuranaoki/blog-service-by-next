import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 3px;
  background-color: palevioletred;
  color: white;
`;

const AddButton: React.FC<{}> = () => {
  return (
    <div>
      <Button onClick={() => console.log('ここでmodalをopenにする')} />
    </div>
  );
}

export default AddButton;
