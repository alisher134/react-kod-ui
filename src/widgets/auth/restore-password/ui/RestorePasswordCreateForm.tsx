import {
  RestorePasswordForm,
  RestorePasswordLabel,
} from '@features/authentication/restore-password';

export const RestorePasswordCreateForm = () => {
  return (
    <>
      <RestorePasswordForm />
      <RestorePasswordLabel />
    </>
  );
};
