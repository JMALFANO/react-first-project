import { saveLocalStorage } from "../../helpers/helper";
import * as Yup from "yup";
import { Form, TextField, Listbox } from "../../components/forms";

const ReferenceSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  reference: Yup.object().required("La referencia es requerida"),
  message: Yup.string().required("El comentario es requerido"),
});

type References = {
  id: number;
  name: string;
};

export default function FeatureReferences(props: any) {
  const handleSubmitData = (valueForm: any) => {

    valueForm.id = new Date().getTime();
    props.setLstState((elem:any) => {
      return [...elem, valueForm];
    });

    saveLocalStorage("reference", valueForm);
  };

  let references: References[] | undefined = [
    {
      id: 0,
      name: "Trabajo",
    },
    {
      id: 1,
      name: "Facultad",
    },
    {
      id: 2,
      name: "Otro",
    },
  ];

  return (
    <>
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
        validationSchema={ReferenceSchema}
      >
        <h2 className="mb-3 font-bold">Referencia</h2>
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
                      <label className="block text-sm font-medium text-gray-700">
                        Referencia
                      </label>

                      <Listbox name="reference">
                        <Listbox.Button>{"Seleccione una opción"}</Listbox.Button>
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
