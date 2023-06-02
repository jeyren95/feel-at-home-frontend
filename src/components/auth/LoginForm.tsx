import { ReactElement } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { object, string } from 'yup';

import TextInput from '../common/form/TextInput';
import InputLabel from '../common/form/InputLabel';
import Button from '../common/Button';

const loginValidationSchema = object({
  username: string().email('Please enter a valid email').required('Email is required'),
  password: string().required('Password is required'),
});

interface LoginFormValues {
  username: string;
  password: string;
}

const INITIAL_LOGIN_FORM_VALUES: LoginFormValues = {
  username: '',
  password: '',
};

const LoginForm = (): ReactElement => {
  const handleSubmit = (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>,
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={INITIAL_LOGIN_FORM_VALUES}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="login-form">
          <div className="login-form__input-field">
            <InputLabel htmlFor="username" label="Username" />
            <TextInput name="username" id="username" type="email" />
          </div>
          <div className="login-form__input-field">
            <InputLabel htmlFor="password" label="Password" />
            <TextInput name="password" id="password" type="password" />
          </div>
          <div className="login-form__submit-button">
            <Button type="submit" text="Login" disabled={isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
