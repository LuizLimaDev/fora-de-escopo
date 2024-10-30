import { Dispatch, FormEventHandler, SetStateAction } from "react";

interface Iprops {
  title: string;
  name: string;
  alert?: boolean;
  setState: Dispatch<SetStateAction<boolean | undefined>>;
  onInvalid: FormEventHandler<HTMLInputElement> | undefined;
  alingAnswerCenter?: boolean;
}

const InputRadio = ({
  title,
  name,
  alert,
  setState,
  onInvalid,
  alingAnswerCenter,
}: Iprops) => {
  return (
    <div className="flex flex-col mb-6">
      <p className={alert ? "text-red-600 text-[1.25rem]" : ""}>{title}</p>
      <div
        className={`w-full mt-2 flex gap-24 ${
          alingAnswerCenter && "justify-center items-center"
        }`}
      >
        <div className="font-sans">
          <input
            type="radio"
            id="Sim"
            name={name}
            value="Sim"
            onChange={() => setState(true)}
            className="text-linx-dark-gray self-start mr-1"
            required
            onInvalid={onInvalid}
          />
          <label htmlFor="Sim">Sim</label>
        </div>

        <div className="font-sans">
          <input
            type="radio"
            id="Não"
            name={name}
            value="Não"
            onChange={() => setState(false)}
            className="text-linx-dark-gray self-start mr-1"
          />
          <label htmlFor="Não">Não</label>
        </div>
      </div>
    </div>
  );
};

export default InputRadio;
