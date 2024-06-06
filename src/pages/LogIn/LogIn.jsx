import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { FaUser,FaLock } from "react-icons/fa";


import './logIn.css';

export default function LogIn() {
  const LogInSchema = Yup.object().shape({
    username: Yup.string().required('Usuario requerido'),
    password: Yup.string().required('Contraseña requerida'),
  });

  const submitHandler = values => {
    console.log(values);
  };

  return (
    <main className='login'>
      <section className='login-section'>
        <img className='login-section-logo' src='/assets/LogIn/grupo-taraborelli.png' alt='Grupo Taraborelli' />
        <h1 className='login-section-title'>PORTAL DE FICHADAS</h1>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={LogInSchema}
          onSubmit={submitHandler}
        >
          {({ errors, touched }) => (
            <Form className='login-section-form'>
              <div className='login-section-form-container'>
                <Field className='login-section-form-container-input' name='username' placeholder='Usuario' />
                {errors.username && touched.username ? <div className='login-section-form-container-errors'>{errors.username}</div> : null}
                <FaUser className='login-section-form-container-icon'/>
              </div>
              <div className='login-section-form-container'>
                <Field className='login-section-form-container-inputpassword' name='password' placeholder='Contraseña' type="password" />
                {errors.password && touched.password ? <div className='login-section-form-container-errors'>{errors.password}</div> : null}
                <FaLock className='login-section-form-container-icon'/>
              </div>
              <button className='login-section-form-container-button' type='submit'>
                INICIAR SESIÓN
              </button>
            </Form>
          )}
        </Formik>
        <p className='login-section-text'>TODOS LOS COLABORADORES TIENEN ACCESO. En el <strong>primer ingreso</strong>, ingresá como usuario y clave tu <strong>N° de DNI.</strong> <br/> Si usted es proveedor, debe acceder a <a style={{textDecoration: 'none'}} href="http://grupotaraborelli.com/proveedores/login.html">Portal Proveedores</a>  <br/>Cualquier inconveniente con el acceso comunicarse con <a style={{textDecoration: 'none'}} href="mailto:soporte@grupotaraborelli.com">soporte@grupotaraborelli.com</a> . </p>
      </section>
    </main>
  );
}
