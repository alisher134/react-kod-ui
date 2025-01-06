import { LoginForm } from '@features/authentication/login/LoginForm';
import { RegisterLabel } from '@features/authentication/login/RegisterLabel';

export const LoginCreateForm = () => {
  return (
    <>
      <LoginForm />
      <RegisterLabel />
    </>
  );
};
