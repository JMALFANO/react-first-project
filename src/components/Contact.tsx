import React, { useEffect, useState } from "react";
import { saveLocalStorage, readLocalStorage } from "../helpers/helper";

import { Form, Field, ErrorMessage, Formik } from "formik";

export default function Contact() {
  const [listContacts, setListContacts] = useState([]);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    setListContacts(readLocalStorage("contact"));
  }, []);

  const handleSubmitData = (reference: any) => {
    saveLocalStorage("contact", reference);
  };

  return (
    <>
      <Formik
        initialValues={{
          id: new Date().getTime(),
          name: "",
          mail: "",
          reference: "job",
          message: "",
        }}
        validate={(values) => {
          let errors: any = {};

          if (!values.name) {
            errors.name = "El nombre es requerido";
          }
          if (!values.mail) {
            errors.mail = "El mail es requerido";
          }
          if (!values.reference) {
            errors.reference = "Seleccione un motivo de contacto";
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
          setTimeout(() => setFormSuccess(false), 2500);
        }}
      >
        {({ errors }) => (
          <Form className="form">
            <h2 className="mb-3 font-bold"> Contacto </h2>
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className=" mt-5 md:mt-0 md:col-span-2">
                  <div className="w-3/4 first-letter:shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-gray-100 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombre
                          </label>
                          <Field
                            type="text"
                            name="name"
                            className="p-2 h-8 mt-1.5 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <ErrorMessage
                            name="name"
                            component={() => (
                              <div className="mt-1 text-red-500 text-xs">
                                {errors.name}
                              </div>
                            )}
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="mail"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Mail
                          </label>
                          <Field
                            type="mail"
                            name="mail"
                            className="p-2 h-8 mt-1.5 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <ErrorMessage
                            name="mail"
                            component={() => (
                              <div className="mt-1 text-red-500 text-xs">
                                {errors.mail}
                              </div>
                            )}
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Motivo de contacto
                          </label>
                          <Field
                            as="select"
                            name="reference"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="job">Oportunidad laboral</option>
                            <option value="help">Ayuda</option>
                            <option value="other">Otro</option>
                          </Field>
                          <ErrorMessage
                            name="reference"
                            component={() => (
                              <div className="mt-1 text-red-500 text-xs">
                                {errors.reference}
                              </div>
                            )}
                          />
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Comentario
                          </label>
                          <Field
                            as="textarea"
                            name="message"
                            placeholder="Ingrese su mensaje, intente ser lo más claro posible."
                            className="h-8 p-1.5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          <ErrorMessage
                            name="message"
                            component={() => (
                              <div className="mt-1 text-red-500 text-xs">
                                {errors.message}
                              </div>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                      {formSuccess && (
                        <span className="mr-20 text-green-600 text-lg font-bold">
                          ¡Formulario enviado con éxito!
                        </span>
                      )}
                      <input
                        type="submit"
                        value="Enviar"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        {listContacts.length ? (
          <h2 className="font-bold mt-5 mb-2">Últimos comentarios enviados:</h2>
        ) : (
          <h2 className="font-bold mt-5">No hay comentarios aún.</h2>
        )}

        {listContacts != null &&
          listContacts.map((contact: any) => {
            return (
              <article
                className="w-2/5 mb-1
               bg-gray-100 rounded-lg p-2"
                key={contact.id}
              >
                <span className="font-bold">{contact.name}</span>
                <p>{contact.message}</p>
              </article>
            );
          })}
      </div>
    </>
  );
}
