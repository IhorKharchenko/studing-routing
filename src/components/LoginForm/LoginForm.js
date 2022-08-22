import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(32).required(),
});
const initialValues = {
  login: '',
  password: '',
};
export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          login
          <Field type="text" name="login" />
          <ErrorMessage name="login" />
        </label>
        <label htmlFor="password">
          password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};
