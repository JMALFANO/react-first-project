import React, { useEffect, useState } from "react";
import { saveLocalStorage, readLocalStorage } from "../helpers/helper";
import { Form, Field, ErrorMessage, Formik } from "formik";

class Contacto {
  id: number;
  name: string;
  email: string;
  message: string;
  reason: string;

  constructor(
    id: number,
    name: string,
    email: string,
    message: string,
    reason: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
    this.reason = reason;
  }
}

export const Contact = () => {
  const [listContacts, setListContacts] = useState([]);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    setListContacts(readLocalStorage("contacto"));
  }, []);

  const handleSubmitData = (contact: Contacto) => {
    console.log("obtengo del form: " + JSON.stringify(contact));
    saveLocalStorage("contacto", contact);
  };

  return (
    <div>
      <h2>Formulario de contacto</h2>

      <Formik
        initialValues={{
          id: new Date().getTime(),
          name: "",
          email: "",
          message: "",
          reason: "otro",
        }}
        validate={(values) => {
          let errors: any = {};

          if (!values.name) {
            errors.name = "El nombre es requerido";
          }
          if (!values.email) {
            errors.email = "El mail es requerido";
          }
          if (!values.reason) {
            errors.reason = "Seleccione un motivo de contacto";
          }
          if (values.message.length < 10) {
            errors.message = "El mensaje debe tener al menos 10 caracteres";
          }

          return errors;
        }}
        onSubmit={(values: any, { resetForm }) => {
          console.log("values del form: " + JSON.stringify(values));
          handleSubmitData(values);
          setFormSuccess(true);
          resetForm(); // resetea el formulario
          setTimeout(() => setFormSuccess(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className="form">
            <label> Nombre</label>
            <Field type="text" name="name" />

            <ErrorMessage
              name="name"
              component={() => <div className="form-error">{errors.name}</div>}
            />

            <label> Email</label>
            <Field type="email" name="email" />

            <ErrorMessage
              name="email"
              component={() => <div className="form-error">{errors.email}</div>}
            />

            <label>Motivo de contacto</label>

            <Field as="select" name="reason">
              <option value="propuestalaboral">Propuesta laboral</option>
              <option value="referencias">Referencias</option>
              <option value="ayuda">Ayuda</option>
              <option value="otro">Otro</option>
            </Field>

            <ErrorMessage
              name="reason"
              component={() => (
                <div className="form-error">{errors.reason}</div>
              )}
            />

            <label>Mensaje</label>
            <Field
              as="textarea"
              name="message"
              placeholder="Ingrese su mensaje, intente ser lo más claro posible."
            />
            <ErrorMessage
              name="message"
              component={() => (
                <div className="form-error">{errors.message}</div>
              )}
            />
            {formSuccess ? (
              <input className="form-valid" type="submit" value="Enviar" />
            ) : (
              <input type="submit" value="Enviar" />
            )}

            {formSuccess && (
              <span className="form-success">
                <strong>¡Formulario enviado con éxito!</strong>
              </span>
            )}
          </Form>
        )}
      </Formik>

      {listContacts.length ? (
        <h2>Últimos comentarios enviados:</h2>
      ) : (
        <h2>No hay comentarios aún.</h2>
      )}

      {listContacts != null &&
        listContacts.map((contact: any) => {
          return (
            <article className="contact-comment" key={contact.id}>
              <h4>{contact.name}</h4>
              <h4>{contact.email}</h4>
              <h5>{contact.reason}</h5>
              <h5>{contact.message}</h5>
            </article>
          );
        })}
    </div>
  );
};
