import { Dispatch, SetStateAction } from "react";

const InputRadio = ({
  name,
  alert,
  setState,
}: {
  name: string;
  alert?: boolean;
  setState: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col mb-6">
      <p className={alert ? "text-red-600" : ""}>{name}</p>
      <div className="w-full mt-2 flex gap-24">
        <div className="font-sans">
          <input
            type="radio"
            id="Sim"
            name={name}
            value="Sim"
            onChange={(e) => setState(e.target.value)}
            className="text-linx-dark-gray self-start mr-1"
          />
          <label htmlFor="Sim">Sim</label>
        </div>

        <div className="font-sans">
          <input
            type="radio"
            id="Não"
            name={name}
            value="Não"
            onChange={(e) => setState(e.target.value)}
            className="text-linx-dark-gray self-start mr-1"
          />
          <label htmlFor="Não">Não</label>
        </div>
      </div>
    </div>
  );
};

export default InputRadio;
