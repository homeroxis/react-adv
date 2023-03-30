import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password1: Yup.string().min(6, 'Must be 6 characters or more').required('Required'),
          password2: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .oneOf([Yup.ref('password1')], 'Passwords must match')
            .required('Required')
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Julieta" />
            <MyTextInput label="Email adress" name="email" type="email" placeholder="julieta@mail.com" />
            <MyTextInput label="Password" name="password1" type="password" />
            <MyTextInput label="Repeat Password" name="password2" type="password" />
            <button type="submit">Create</button>
            <button onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
