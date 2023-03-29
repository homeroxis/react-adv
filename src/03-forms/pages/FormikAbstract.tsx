import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput} from '../components';
import '../styles/styles.css';

export const FormikAbstract = () => {

  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          // console.log(values);
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            terms: Yup.boolean()
              .oneOf([true], 'You must accept the terms and conditions'),
            jobType: Yup.string()
              .notOneOf(['it-js'], 'Invalid Job Type')
              .required('Required'),
          })
        }
      >
        {
          (formik) => (
            <Form>
              <MyTextInput
                label="First Name"
                name="firstName"
                placeholder="First Name"
              />
              <MyTextInput
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
              />
              <MyTextInput
                label="Email Adress"
                name="email"
                placeholder="john@mail.com"
                type="email"
              />
              <MySelect label="Job Type" name="jobType" >
                <option value="">Select a job type</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-js">IT Jr.</option>
              </MySelect>
              <MyCheckbox label="Terms & conditions" name="terms" />

              <button type="submit">Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};
