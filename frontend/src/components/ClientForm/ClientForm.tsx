"use client";

import tpContext from "@/context/tpContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import InputMask from "react-input-mask";

const ClientForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string>("");
  const context = useContext(tpContext);
  const router = useRouter();

  if (!context) {
    throw new Error("useContext must be used within a TpProvider");
  }

  const { setClientData } = context;

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
      cpf: cleanedCpf,
      role,
      phone: cleanedPhone,
    };

    setClientData(clientData);

    router.push("/service");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 text-linx-dark-gray mb-4"
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

        <button className="w-full font-dosis font-bold text-linx-white text-xl bg-linx-orange rounded-3xl mt-10 xl:mt-0 py-3">
          Registrar chamado
        </button>
      </form>
    </>
  );
};

export default ClientForm;
