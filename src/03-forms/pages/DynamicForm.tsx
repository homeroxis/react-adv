import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key:string]: any } = {}
const requiredFields: { [key:string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if( !input.validations ) continue;

  let schema = Yup.string()

  for (const rule of input.validations ) {
    if( rule.type === 'required' ) {
      schema = schema.required('Este campo es requerido');
    }
    if( rule.type === 'minLength' ) {
      schema = schema.min( (rule as any).value, (rule as any).message );
    }
    if( rule.type === 'maxLength' ) {
      schema = schema.max( (rule as any).value, (rule as any).message );
    }
    if( rule.type === 'email' ) {
      schema = schema.email( (rule as any).message );
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={values => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {

              if( type === 'text' || type === 'email' || type === 'password' ) {
                return <MyTextInput
                  key={ name }
                  type={ type as any }
                  name={ name }
                  label={ label }
                  placeholder={ placeholder }
                />;
              } else if( type === 'select' ) {
                return (
                  <MySelect key={ name } label={ label } name={ name } >
                    {options?.map(({ value, label, id }) => (
                      <option key={ id } value={ value }>{ label }</option>
                    ))}
                  </MySelect>
                )
              }
              throw new Error('El type no es soportodo!');
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
