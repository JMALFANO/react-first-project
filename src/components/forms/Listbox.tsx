import { Listbox as List } from "@headlessui/react";
import classNames from "classnames";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
  useField,
} from "formik";
import React, { ReactElement, ReactNode } from "react";

/**
 * Listbox component
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
 * <Form initialValues={{location: locations[0]}}>
 *  <Listbox label="Location" name="location" >
 *    <List.Button>{location.name}</List.Button>
 *    <List.Options>
 *       {locations.map((location) => (
 *          <List.Option key={location} value={location}>
 *            {location.name}
 *          </List.Option>
 *        ))}
 *    </List.Options>
 * </Listbox>
 * </Form>
 */
const ListboxRoot = ({ children, ...props }: any) => {
  const [field, _, helpers] = useField(props);
  return (
    <List onChange={(e) => helpers.setValue(e)} value={field.value} {...props}>
      <div className="relative mt-1">
        {React.Children.map(children, (child) => {
          return typeof child === "object"
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  field,
                },
              })
            : child;
        })}
      </div>
    </List>
  );
};

const Button = ({
  children,
  field,
  meta,
  helpers,
  ...props
}: {
  children?: ReactNode;
  field?: FieldInputProps<any>;
  meta?: FieldMetaProps<any>;
  helpers?: FieldHelperProps<any>;
}) => {
  return (
    <List.Button
      {...props}
      className="group relative h-12 w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm"
      data-testid={`${field?.name}-listbox`}
    >
      {({ open }) => (
        <>
          <span className="block truncate">
            {
              (typeof children === "function"
              // @ts-ignore
                ? children({ value: field?.value })
                : children) as ReactElement | ReactElement[]
            }
          </span>
          <span
            className={classNames(
              "pointer-events-none absolute inset-y-0 right-4 flex transform items-center duration-200",
              open ? "rotate-180" : "rotate-0"
            )}
          >
            <svg className="h-6 w-6 fill-accent" viewBox="0 0 24 24" role="img">
              <path d="M19.0041247,9.00434245 C19.0056284,9.26976069 18.9012781,9.52486907 18.7140916,9.71331474 L12.7140916,15.7046298 C12.526325,15.8936685 12.2707292,16 12.0040916,16 C11.7374541,16 11.4818582,15.8936685 11.2940916,15.7046298 L5.29409163,9.71331474 C4.90196946,9.32176015 4.90196946,8.68692474 5.29409163,8.29537016 C5.6862138,7.90381558 6.32196946,7.90381558 6.71409163,8.29537016 L12.0040916,13.5876985 L17.2940916,8.29537016 C17.4818582,8.10633154 17.7374541,8 18.0040916,8 C18.2707292,8 18.526325,8.10633154 18.7140916,8.29537016 C18.9012781,8.48381582 19.0056284,8.73892421 19.0041247,9.00434245 Z"></path>
            </svg>
          </span>
        </>
      )}
    </List.Button>
  );
};

const Options = (props: any) => {
  return (
    <List.Options
      className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      {...props}
    />
  );
};

const Option = (props: {
  children: ReactNode;
  disabled?: boolean;
  value: unknown;
}) => {
  return (
    <List.Option
      className={({ active, disabled }) =>
        classNames(
          "relative cursor-default select-none py-2 pl-10 pr-4",
          active ? "bg-gray-100 text-gray-900" : "text-gray-900",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        )
      }
      data-testid={`listbox-option`}
      {...props}
    >
      {({ selected }) => (
        <>
          <span
            className={`block truncate ${
              selected ? "font-medium" : "font-normal"
            }`}
          >
            {props.children}
          </span>
          {selected ? (
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : null}
        </>
      )}
    </List.Option>
  );
};

export default Object.assign(ListboxRoot, { Button, Options, Option });
