import classNames from "classnames";
import type { UseFormRegister } from "react-hook-form";

interface InputProps {
  className?: string;
  title: string;
  name: string;
  errors?: any;
  register: UseFormRegister<any>;
  required?: boolean;
}

export interface TextInputProps extends InputProps {
  type?: string;
  placeholder?: string;
}

export function TextInput({
  className = "",
  type = "text",
  placeholder = "",
  name,
  title,
  errors = {},
  register,
  required = true,
}: TextInputProps) {
  return (
    <div
      className={classNames("form-control relative w-full", {
        [className]: Boolean(className),
      })}
    >
      {title && (
        <span
          className="label-text mb-2"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={classNames("input-bordered input w-full", {
          "input-error": Boolean(errors[name]?.message),
        })}
        {...register(name, { required })}
      />
      {errors[name]?.message && (
        <label className="label absolute bottom-[-28px] right-0">
          <span className="label-text-alt text-error">
            {errors[name]?.message}
          </span>
        </label>
      )}
    </div>
  );
}

export interface SelectInputProps extends InputProps {
  options: [string, string][];
}

export function SelectInput({
  className = "",
  options,
  name,
  title,
  errors = {},
  register,
  required = true,
}: SelectInputProps) {
  return (
    <div
      className={classNames("form-control relative w-full", {
        [className]: Boolean(className),
      })}
    >
      {title && (
        <label className="label">
          <span
            className="label-text"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </label>
      )}
      <select
        className={classNames("select-bordered select", {
          "select-error": Boolean(errors[name]?.message),
        })}
        {...register(name, { required })}
      >
        {options.map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
      {errors[name]?.message && (
        <label className="label absolute bottom-[-28px] right-0">
          <span className="label-text-alt text-error">
            {errors[name]?.message}
          </span>
        </label>
      )}
    </div>
  );
}
