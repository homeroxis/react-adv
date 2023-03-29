import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

  const { formData, onChange, name, 
          email, password1, password2, 
          resetForm, isValidEmail } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });

  const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    console.log(formData);
  }


  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={ onSubmit }>
        <input
          type="text"
          name="name"
          value={ name }
          placeholder="Name"
          onChange={ onChange }
          className={` ${ name.trim().length <= 0 && 'has-error' } `}
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }
        <input
          type="email"
          name="email"
          value={ email }
          placeholder="Email"
          onChange={ onChange }
          className={` ${ !isValidEmail( email ) && 'has-error' } `}
        />
        { !isValidEmail( email ) && <span>Email no es válido</span> }
        <input
          type="password"
          name="password1"
          value={ password1 }
          placeholder="Password"
          onChange={ onChange }
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>Contraseña debe tener 6 caracteres</span> }
        <input
          type="password"
          name="password2"
          value={ password2 }
          placeholder="Repeat Password"
          onChange={ onChange }
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }
        <button 
          type="submit"
        >Create</button>
        <button onClick={ resetForm }
        >Reset</button>
      </form>
    </div>
  );
};
