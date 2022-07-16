import { saveLocalStorage } from "../../helpers/helper";
import * as Yup from "yup";
import { Form, TextField, Listbox } from "../../components/forms";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  mail: Yup.string().required("El mail es requerido"),
  reference: Yup.object().required("El motivo de contacto es requerido"),
  message: Yup.string().required("El comentario es requerido"),
});

type References = {
  id: number;
  name: string;
};

export default function FeatureContact(props: any) {
  const [selectReference, setSelectReference] = useState<string>(
    "Seleccione una opción"
  );

  const handleSubmitData = (valueForm: any) => {
    toast.success("¡Formulario enviado correctamente!");
    valueForm.id = new Date().getTime();
    props.setLstState((elem: any) => {
      return [...elem, valueForm];
    });

    saveLocalStorage("contact", valueForm);
  };

  let references: References[] | undefined = [
    {
      id: 0,
      name: "Propuesta laboral",
    },
    {
      id: 1,
      name: "Comentarios",
    },
    {
      id: 2,
      name: "Ayuda",
    },
    {
      id: 3,
      name: "Otro",
    },
  ];

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Form
        className="form"
        onSubmit={handleSubmitData}
        initialValues={{
          id: "",
          name: "",
          mail: "",
          reference: references?.[0],
          message: "",
        }}
        validationSchema={ContactSchema}
      >
        <div className="sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className=" mt-5 md:mt-0 md:col-span-2">
              <div className="md:w-3/4 first-letter:shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-gray-100 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nombre
                      </label>
                      <TextField
                        type="text"
                        name="name"
                        className="p-2 h-12 mt-1 rounded-md border-2 border-gray-300 block w-full shadow-sm sm:text-sm focus:border-indigo-200 focus:outline-none"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="mail"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mail
                      </label>
                      <TextField
                        type="mail"
                        name="mail"
                        className="p-2 h-12 mt-1 rounded-md border-2 border-gray-300 block w-full shadow-sm sm:text-sm focus:border-indigo-200 focus:outline-none"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Motivo de contacto
                      </label>

                      <Listbox
                        name="reference"
                        onChange={(value: any) => {
                          setSelectReference(value?.name);
                        }}
                      >
                        <Listbox.Button>{selectReference}</Listbox.Button>
                        <Listbox.Options>
                          {references?.map((reference) => (
                            <Listbox.Option
                              key={reference.id}
                              value={reference}
                            >
                              {reference.name}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Comentario
                      </label>
                      <TextField
                        as="textarea"
                        name="message"
                        placeholder="Intente ser lo más claro posible"
                        className="p-2 h-12 mt-1 rounded-md border-2 border-gray-300 block w-full shadow-sm sm:text-sm focus:border-indigo-200 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-100 text-right sm:px-6">
                  <input
                    type="submit"
                    value="Enviar"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring focus:ring-offset focus:ring-indigo-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
