"use client";

import tpContext from "@/context/tpContext";
import { useContext, useState } from "react";
import InputMask from "react-input-mask";

const ClientForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { setClientdata } = useContext(tpContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name || !email || !cpf || !role || !phone) {
      setError("Todos os campos são obrigatórios");
      return;
    }

    const cleanedCpf = cpf.replace(/[.-]/g, "");
    const cleanedPhone = phone.replace(/[()\s]/g, "");

    const clientData = {
      name,
      email,
      cleanedCpf,
      role,
      cleanedPhone,
    };

    //TODO - setar o objeto do cliente no estado global para enviar tudo junto (conferir objeto da collection)
    setClientdata(clientData);
    //TODO - redirect para pagina de questionario de configuração

    console.log("form enviado: ", clientData);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 text-linx-dark-gray"
      >
        <div className="container-input">
          <label className="input-title">Nome completo</label>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            className="input"
          />
        </div>
        <div className="container-input">
          <label className="input-title">Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="input"
          />
        </div>
        <div className="container-input">
          <label className="input-title">CPF</label>
          <InputMask
            mask="999.999.999-99"
            type="text"
            placeholder="xxx.xxx.xxx-xx"
            value={cpf}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCpf(e.target.value)
            }
            className="input"
          />
        </div>
        <div className="container-input">
          <label className="input-title">Cargo</label>
          <input
            type="text"
            placeholder="Ocupação profissional na loja"
            value={role}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRole(e.target.value)
            }
            className="input"
          />
        </div>
        <div className="container-input">
          <label className="input-title">Telefone</label>
          <InputMask
            mask="(99) 99999 9999"
            type="text"
            placeholder="(xx) xxxxx xxxx"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            className="input"
          />
        </div>
        <span className="w-full text-red-600">{error}</span>

        <button className="w-full font-dosis font-bold text-linx-white text-xl bg-linx-orange rounded-3xl mt-10 py-3">
          Registrar chamado
        </button>
      </form>
    </>
  );
};

export default ClientForm;
