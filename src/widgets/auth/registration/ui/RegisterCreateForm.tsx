import { LoginLabel } from '@features/authentication/registration/LoginLabel';
import { RegisterForm } from '@features/authentication/registration/RegisterForm';

export const RegisterCreateForm = () => {
  return (
    <>
      <RegisterForm />
      <LoginLabel />
    </>
  );
};
