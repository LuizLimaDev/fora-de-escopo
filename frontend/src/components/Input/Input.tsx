import { ChangeEventHandler } from "react";

interface Iprops {
  title: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({ title, type, placeholder, value, onChange }: Iprops) => {
  return (
    <div className="container-input my-4">
      <label className="text-sm font-medium">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-md h-9"
      />
    </div>
  );
};

export default Input;
