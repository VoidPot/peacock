import classNames from "classnames";
import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import { getValidDate } from "~/helpers/utils";

interface InputProps {
  className?: string;
  title: string;
  name: string;
  errors?: any;
  register: any;
  required?: boolean;
  disabled?: boolean;
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
  disabled = false,
}: TextInputProps) {
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
      <input
        type={type}
        disabled={disabled}
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

export interface DatePickerInputProps extends InputProps {
  control: Control<any, any>;
}

export function DatePickerInput({
  className = "",
  name,
  title,
  errors = {},
  register,
  required = true,
  control,
}: DatePickerInputProps) {
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
      <Controller
        control={control}
        name={name}
        render={({ field }: any) => (
          <DatePicker
            className={classNames("input-bordered input w-full", {
              [className]: Boolean(className),
            })}
            placeholderText="Select date"
            onChange={(date) => field.onChange(date)}
            selected={getValidDate(field.value) || new Date()}
            dateFormat="dd/MM/yyyy"
          />
        )}
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
