import * as React from 'react';
import DefaultLayout from '../layouts/default';
import LoginForm from '../components/login/index';

const Login: React.FC<{}> = () => {
  return (
    <DefaultLayout logoutButton={false}>
      <h1>Login</h1>
      <LoginForm />
    </DefaultLayout>
  )
}

export default Login;
