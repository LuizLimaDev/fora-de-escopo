"use client";

import Input from "@/components/Input/Input";
import { useState } from "react";
import InputMask from "react-input-mask";
import servicesPrices from "../../utils/servicesPrices.json";
import InputRadio from "../InputRadio/InputRadio";

const ServiceForm = () => {
  const [cnpj, setCnpj] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [adress, setAdress] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(cnpj, company, companyName, adress);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="w-full p-4 bg-linx-white rounded-3xl text-m text-linx-dark-gray font-roboto">
        <h1 className="mt-2 font-dosis font-bold text-center text-linx-purple text-2xl">
          Questionário de instalação
        </h1>
        <div className="mt-8">
          <div className="container-input">
            <label className="text-sm font-medium">CNPJ</label>
            <InputMask
              mask="99.999.999/9999-99"
              type="text"
              placeholder="xxx.xxx.xxx-xx"
              value={cnpj}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCnpj(e.target.value)
              }
              className="pl-2 border rounded-md h-9"
            />
          </div>
          <Input
            title="Razão social"
            type="text"
            placeholder=""
            value={company}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCompany(e.target.value)
            }
          />
          <Input
            title="Nome da loja"
            type="text"
            placeholder=""
            value={companyName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCompanyName(e.target.value)
            }
          />
          <Input
            title="Endereço"
            type="text"
            placeholder=""
            value={adress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAdress(e.target.value)
            }
          />
        </div>
        <div>
          <p className="mt-10 mb-4 text-sm font-medium">
            Qual será o tipo de instalação?
          </p>
          <table className="w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3 text-sm font-medium text-linx-dark-gray captalize"
                ></th>
                <th
                  scope="col"
                  className="py-3 text-sm font-medium text-linx-dark-gray captalize"
                >
                  Quantidade
                </th>
                <th
                  scope="col"
                  className="py-3 text-sm font-medium text-linx-dark-gray captalize"
                >
                  Valor
                </th>
              </tr>
            </thead>
            <tbody>
              {servicesPrices.products.map((item, index) => (
                <tr
                  key={index}
                  className="w-[65%] pb-2 whitespace-nowrap text-sm font-medium text-gray-800"
                >
                  <td>
                    <input
                      type="checkbox"
                      id={String(index)}
                      name={item.name}
                      className="mr-1 text-center"
                    />
                    <label htmlFor={String(index)}>{item.name}</label>
                  </td>
                  <td className="text-center">
                    <input
                      type="number"
                      placeholder="0"
                      className="w-6 text-center"
                    />
                  </td>
                  <td className="text-center">${item.price}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td className="pr-2 text-end text-sm">Total</td>
                <td className="text-sm">${}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 text-sm font-medium text-linx-dark-gray captalize">
          <InputRadio name="A loja utiliza Mobile (POS, celular ou Tablet)?" />
        </div>
        <button className="w-full font-dosis font-bold text-linx-white text-xl bg-linx-orange rounded-3xl mt-10 py-3">
          Registrar chamado
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
