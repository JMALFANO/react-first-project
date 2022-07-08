import { useField } from "formik";
import React, { useMemo } from "react";

/**
 * TextField component
 * @description Flame-UI TextField component adapted to Formik
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
 *  <TextField label="Name" name="name" />
 * </Form>
 */

export default function TextField({ helperText, label, ...props }: any) {
  const [field, meta, helpers] = useField(props);

  const currentStyle = useMemo(() => {
    if (meta.touched && meta.error) return stateStyles.error;
    return stateStyles.default;
  }, [meta.error, meta.touched]);

  return (
    <div>
      <div className="relative">
        <input
          id={field.name}
          type="text"
          className={`peer block h-12 w-full appearance-none rounded-lg border border-${currentStyle.border} bg-transparent px-4 pb-3 pt-4 text-sm text-neutral-900 focus:border-2 focus:border-${currentStyle.borderFocus} focus:outline-none focus:ring-0`}
          placeholder=" "
          {...field}
          {...props}
        />
        {label && (
          <label
            className={`pointer-events-none absolute top-2 left-3 z-10 origin-[0] -translate-y-4 scale-90 transform bg-white px-1 text-sm text-${currentStyle.label} peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:px-1 peer-focus:text-${currentStyle.labelFocus}`}
            htmlFor={field.name}
          >
            {label}
          </label>
        )}
      </div>
      <p className={`mt-2 text-${currentStyle.helperText} ml-1 text-red-500 text-xs`}>
        {(meta.touched && meta.error && meta.error) || helperText}
      </p>
    </div>
  );
}

const stateStyles = {
  default: {
    border: "neutral-300",
    borderFocus: "accent",
    label: "neutral-700",
    labelFocus: "accent",
    helperText: "neutral-700",
  },
  error: {
    border: "error",
    borderFocus: "error",
    label: "error-darker",
    labelFocus: "error-darker",
    helperText: "error-darker",
  },
};
