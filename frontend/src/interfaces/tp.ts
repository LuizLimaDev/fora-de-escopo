interface IClientData {
  name: string;
  email: string;
  cpf: string;
  role: string;
  phone: string;
}

interface ICompany {
  cnpj: string;
  name: string;
  company_name: string;
  adress: string;
}

interface IProduct {
  name: string;
  quantity: string;
  value: number;
}

interface IService {
  product: [IProduct];
  mobile: boolean;
  closed: boolean;
  aa: boolean;
  number_of_pdv: number;
  remote_printer: boolean;
  extra_equipment: boolean;
  equipments: [string];
  tax: string;
  activation_code: null | string;
}

export type { IClientData, ICompany, IProduct, IService };
