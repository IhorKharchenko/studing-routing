import { Formik, Form, Field } from 'formik';

const initialValues = {
  login: '',
  password: '',
};
export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="login">
          login
          <Field type="text" name="login" />
        </label>
        <label htmlFor="password">
          password
          <Field type="password" name="password" />
        </label>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};
