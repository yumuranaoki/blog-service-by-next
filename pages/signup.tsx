import * as React from 'react';
import DefaultLayout from '../layouts/default';
import SignupForm from '../containers/signup'

const Signup: React.FC<{}> = () => {
  return (
    <DefaultLayout logoutButton={false}>
      <h1>Signup</h1>
      <SignupForm />
    </DefaultLayout>
  )
}

export default Signup;
