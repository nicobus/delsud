import React from 'react';
import { useFormik } from 'formik';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
    <Row >
      <Col  md={3} className="bg-light m-5" class="left-align"> 
        <h2>¿QUERES RECIBIR ASESORAMIENTO?</h2>
        <p>Si tenés alguna consulta para hacernos sobre Plan E, no dudes en contactarnos. Con mucho gusto la responderemos.</p>
      </Col>
      <Col md={8} className="my-5">
        
        <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={4}>
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="phone">telefono</label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />

      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      </Col>
      <Col md={4}>
      <button type="submit">Enviar</button>
      </Col>
      </Row>
      
    </form>
    
      </Col>
      </Row>
      </>
  );
};
export default Contact