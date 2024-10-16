import { ChangeEventHandler, FormEventHandler } from "react";

interface Iprops {
  title: string;
  type: string;
  name?: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  required?: boolean | undefined;
  onInvalid?: FormEventHandler<HTMLInputElement> | undefined;
  min?: string;
  max?: string;
}

const Input = ({
  title,
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  onInvalid,
  min,
  max,
}: Iprops) => {
  return (
    <div className="container-input my-4">
      <label className="text-sm font-medium">{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-1 border rounded-md h-9"
        required={required}
        onInvalid={onInvalid}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;
