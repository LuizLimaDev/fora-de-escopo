"use client";

import { IClientData, ICompany, IService, ItpContext } from "@/interfaces/tp";
import { createContext, ReactNode, useState } from "react";

export const tpContext = createContext<ItpContext | undefined>(undefined);

export const TpProvider = ({ children }: { children: ReactNode }) => {
  const [clientData, setClientdata] = useState<IClientData>({
    name: "",
    email: "",
    cpf: "",
    role: "",
    phone: "",
  });
  const [company, setCompany] = useState<ICompany>({
    cnpj: "",
    name: "",
    company_name: "",
    adress: "",
  });
  const [service, setService] = useState<IService>({
    product: [
      {
        name: "",
        quantity: "",
        value: 0,
      },
    ],
    mobile: false,
    closed: false,
    aa: false,
    number_of_pdv: 0,
    remote_printer: false,
    extra_equipment: false,
    equipments: [""],
    tax: "",
    activation_code: null,
  });

  return (
    <tpContext.Provider
      value={{
        clientData,
        setClientdata,
        company,
        setCompany,
        service,
        setService,
      }}
    >
      {children}
    </tpContext.Provider>
  );
};

export default tpContext;
