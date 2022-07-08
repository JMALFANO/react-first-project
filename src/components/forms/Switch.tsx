import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { useField } from "formik";

/**
 * Checkbox component
 * @description Flame-UI Checkbox component adapted to Formik
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
 *  <FlameCheckbox label="Name" name="name" />
 * </Form>
 */
export default function ToggleSwitch({
  label,
  description,
  labelSide = "left",
  ...props
}: any) {
  const [field, meta, helpers] = useField(props);
  return (
    <Switch.Group
      as="div"
      className={classNames(
        "flex items-center justify-between gap-4",
        labelSide === "right" && "flex-row-reverse"
      )}
    >
      <span className="flex flex-grow flex-col">
        {label && (
          <Switch.Label
            as="span"
            className="text-sm font-medium text-gray-900"
            passive
          >
            {label}
          </Switch.Label>
        )}
        {description && (
          <Switch.Description as="span" className="text-sm text-gray-500">
            Solo será visible en la extensión si está habilitado.
          </Switch.Description>
        )}
      </span>
      <Switch
        name={field.name}
        checked={field.value}
        onChange={(e) => helpers.setValue(e)}
        className={classNames(
          meta.value ? "bg-accent" : "bg-gray-200",
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
        )}
        data-testid={`${props.name}-switch`}
      >
        <span
          aria-hidden="true"
          className={classNames(
            meta.value ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          )}
        />
      </Switch>
    </Switch.Group>
  );
}
