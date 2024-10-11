"use client";

import { useState } from "react";

const ClientForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("form enviado");
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-3">
        <div className="container-input">
          <label className="input-title">Nome completo</label>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="container-input">
          <label className="input-title">Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="container-input">
          <label className="input-title">CPF</label>
          <input
            type="text"
            placeholder="xxx.xxx.xxx-xx"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="input"
          />
        </div>
        <div className="container-input">
          <label className="input-title">Cargo</label>
          <input
            type="text"
            placeholder="Ocupação profissional na loja"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="input"
          />
        </div>
        <div className="container-input">
          <label className="input-title">Telefone</label>
          <input
            type="text"
            placeholder="(xx) xxxxx xxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
