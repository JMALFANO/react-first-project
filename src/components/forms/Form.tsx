import {
  Form as FormContainer,
  Formik,
  FormikConfig,
  FormikValues,
} from "formik";

export default function Form<Values extends FormikValues = FormikValues>({
  children,
  className,
  ...props
}: FormikConfig<Values> & { className?: string }) {

  return (
    <Formik {...props}>
      <FormContainer className={className}>
        <>
        {children} 
        </>  
        </FormContainer>
    </Formik>
  );
}
