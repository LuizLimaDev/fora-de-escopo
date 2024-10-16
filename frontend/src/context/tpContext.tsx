"use client";

import { IClientData } from "@/interfaces/tp";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

const defaultClientData: IClientData = {
  name: "",
  email: "",
  cpf: "",
  role: "",
  phone: "",
};

export const tpContext = createContext<{
  clientData: IClientData | undefined;
  setClientData: Dispatch<SetStateAction<IClientData | undefined>>;
}>({
  clientData: defaultClientData,
  setClientData: () => {},
});

export const TpProvider = ({ children }: { children: ReactNode }) => {
  const [clientData, setClientData] = useState<IClientData>();

  return (
    <tpContext.Provider
      value={{
        clientData,
        setClientData,
      }}
    >
      {children}
    </tpContext.Provider>
  );
};

export default tpContext;
