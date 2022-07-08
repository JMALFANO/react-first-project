import classNames from "classnames";
import { useField } from "formik";
import React from "react";

/**
 * TextArea component
 * @description Flame-UI TextArea component adapted to Formik
 *
 * @warning This component should be used within this projects Form
 * component in order for it to work.
 *
 * @param {string} label - Label to show above the field
 * @param {string} helperText - Helper text related to the field's input
 * @param {string} success - It indicates the field is valid and shows the success message
 * @param {boolean} disabled - Disables the component if true
 * @param {boolean} readOnly - Shows the component in readOnly mode if true
 * @param {number} maxLength - Shows a character counter with the max length
 *
 * @example
 * <Form initialValues={{name: ''}}>
 *  <TextArea label="Name" name="name" />
 * </Form>
 */

type CustomTextFieldProps = {
  helperText?: string;
};

export default function TextArea({
  label,
  ...props
}: React.HTMLProps<HTMLTextAreaElement> & CustomTextFieldProps) {
  const [field, meta] = useField(props as any);
  return (
    <div className="group relative w-full">
      <textarea
        className={classNames(
          "peer block min-h-[3rem] w-full appearance-none rounded-md border border-gray-400 bg-transparent py-2.5 px-4 text-sm text-gray-900 focus:border-2 focus:border-accent focus:outline-none focus:ring-0",
          {
            "border-error focus:border-error": meta.touched && meta.error,
            "read-only:border-0 disabled:cursor-not-allowed disabled:bg-gray-100":
              true,
          }
        )}
        placeholder={" "}
        {...field}
        {...props}
        data-testid={`${props.name}-textarea`}
      />
      {label && (
        <label
          htmlFor={field.name}
          className={classNames(
            "absolute left-4 -top-2 bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:bg-white peer-focus:text-xs peer-focus:text-accent",
            {
              "text-error peer-placeholder-shown:text-error-darker peer-focus:text-error-darker":
                meta.touched && meta.error,
            }
          )}
        >
          {label}
        </label>
      )}
      {meta.touched && meta.error && (
        <p
          className="inline-flex whitespace-nowrap pl-2 text-xs leading-6 text-error-darker"
          id={`${field.name}-error`}
        >
          <svg className="h-6 w-6 fill-error" viewBox="0 0 24 24" role="img">
            <path d="M12,5 C15.8659932,5 19,8.13400675 19,12 C19,15.8659932 15.8659932,19 12,19 C8.13400675,19 5,15.8659932 5,12 C5,8.13400675 8.13400675,5 12,5 Z M14.8826035,8.95589533 C14.6078822,8.75808533 14.2253136,8.78473693 13.9786748,9.03137574 L13.9786748,9.03137574 L12,11.01 L10.0213252,9.03137574 C9.77468642,8.78473693 9.39211779,8.75808533 9.11739653,8.95589533 L9.03015152,9.03015152 C8.75678451,9.30351852 8.76076694,9.75071643 9.03137574,10.0213252 L11.01,12 L9.03137574,13.9786748 C8.78782782,14.2222227 8.76024726,14.6088078 8.95645118,14.8829739 L9.03015152,14.9698485 L9.11739653,15.0441047 C9.39211779,15.2419147 9.77468642,15.2152631 10.0213252,14.9686243 L10.0213252,14.9686243 L12,12.99 L13.9786748,14.9686243 C14.2253136,15.2152631 14.6078822,15.2419147 14.8826035,15.0441047 L14.9698485,14.9698485 C15.2432155,14.6964815 15.2392331,14.2492836 14.9686243,13.9786748 L12.99,12 L14.9686243,10.0213252 C15.2121722,9.77777731 15.2397527,9.39119221 15.0435488,9.11702613 L14.9698485,9.03015152 Z"></path>
          </svg>
          {meta.error}
        </p>
      )}
    </div>
  );
}
