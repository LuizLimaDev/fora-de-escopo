"use client";

import tpContext from "@/context/tpContext";
import { useContext } from "react";

const ClientInfo = () => {
  const { clientData } = useContext(tpContext);

  return (
    <div className="w-[40%]">
      <h2 className=" font-bold font-roboto text-linx-orange text-2xl">
        Solicitante
      </h2>
      <p className="font-light font-roboto text-linx-white text-2xl mb-28">
        {clientData?.name}
      </p>

      <h2 className=" font-bold font-roboto text-linx-orange text-2xl">
        Email
      </h2>
      <p className="font-light font-roboto text-linx-white text-2xl mb-28">
        {clientData?.email}
      </p>

      <h2 className=" font-bold font-roboto text-linx-orange text-2xl">CPF</h2>
      <p className="font-light font-roboto text-linx-white text-2xl mb-28">
        {clientData?.cpf}
      </p>

      <h2 className=" font-bold font-roboto text-linx-orange text-2xl">
        Cargo
      </h2>
      <p className="font-light font-roboto text-linx-white text-2xl mb-28">
        {clientData?.role}
      </p>

      <h2 className=" font-bold font-roboto text-linx-orange text-2xl">
        Telefone
      </h2>
      <p className="font-light font-roboto text-linx-white text-2xl mb-28">
        {clientData?.phone}
      </p>
    </div>
  );
};

export default ClientInfo;
