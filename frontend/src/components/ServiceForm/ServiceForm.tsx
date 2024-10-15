"use client";

import requiredMsg from "@/app/schema/formVallidationSchema";
import Input from "@/components/Input/Input";
import { ChangeEvent, useState } from "react";
import InputMask from "react-input-mask";
import servicesPrices from "../../utils/servicesPrices.json";
import InputRadio from "../InputRadio/InputRadio";

const ServiceForm = () => {
  const [cnpj, setCnpj] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [products, setProducts] = useState<
    {
      name: string;
      quantity: number;
      value: string | undefined;
    }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [fiscalType, setFiscalType] = useState<string>("");
  const [satCode, setSatCode] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [aa, setAa] = useState<string>("");
  const [closed, setClosed] = useState<string>("");
  const [numberOfPdv, setNumberOfPdv] = useState<string>("");
  const [pdvNumber, setPdvNumber] = useState<string>("");
  const [remotePrinter, setRemotePrinter] = useState<string>("");
  const [extraEquipment, setEextraEquipment] = useState<string>("");
  const [equipments, setEquipments] = useState<string>("");

  function handleChangeProducts(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.name;
    const checked = e.target.checked;
    const price = servicesPrices.products.find(
      (item) => item.name == value
    )?.price;

    if (!checked) {
      setProducts((prev) => prev.filter((product) => product.name !== value));
      return;
    }

    const updateProduct = {
      name: value,
      quantity: 0,
      value: price,
    };

    setProducts((prev) => [...prev, updateProduct]);
  }

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const product = e.target.name;
    const currentProduct = products.find((item) => item.name === product);

    currentProduct!.quantity = Number(value);

    const updatePrice = products.reduce(
      (acc, item) => Number(acc) + Number(Number(item!.value) * item.quantity),
      0
    );

    setTotalPrice(updatePrice);
  }

  function handleValidation(e: ChangeEvent<HTMLInputElement>) {
    const field = e.target.name;

    e.target.setCustomValidity("");

    requiredMsg(e, cnpj, field, "cnpj", "O CNPJ é obrigatório!");
    requiredMsg(e, company, field, "company", "A Razão Social é obrigatória!");
    requiredMsg(
      e,
      companyName,
      field,
      "companyName",
      "O nome da loja é obrigatório!"
    );
    requiredMsg(e, adress, field, "adress", "O endereço é obrigatório!");

    //validacao para checkbox
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(
      cnpj,
      company,
      companyName,
      adress,
      products,
      fiscalType,
      satCode,
      mobile,
      aa,
      closed,
      numberOfPdv,
      pdvNumber,
      remotePrinter,
      extraEquipment
    );
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
              name="cnpj"
              type="text"
              placeholder="xxx.xxx.xxx-xx"
              value={cnpj}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCnpj(e.target.value)
              }
              onInvalid={handleValidation}
              className="pl-2 border rounded-md h-9"
              required
            />
          </div>
          <Input
            title="Razão social"
            type="text"
            name="company"
            placeholder=""
            value={company}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCompany(e.target.value)
            }
            onInvalid={handleValidation}
          />
          <Input
            title="Nome da loja"
            type="text"
            name="companyName"
            placeholder=""
            value={companyName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCompanyName(e.target.value)
            }
            onInvalid={handleValidation}
          />
          <Input
            title="Endereço"
            type="text"
            name="adress"
            placeholder=""
            value={adress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAdress(e.target.value)
            }
            onInvalid={handleValidation}
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
                      onChange={(e) => handleChangeProducts(e)}
                      className="mr-1 text-center"
                    />
                    <label htmlFor={String(index)}>{item.name}</label>
                  </td>
                  <td className="text-center">
                    {products.find((product) => product.name == item.name) !==
                    undefined ? (
                      <input
                        type="number"
                        name={item.name}
                        placeholder="0"
                        onChange={(e) => handleQuantityChange(e)}
                        className="w-10 text-center"
                      />
                    ) : (
                      <p>-</p>
                    )}
                  </td>
                  <td className="text-center">${item.price}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td className="pr-2 text-end text-sm">Total</td>
                <td className="text-sm">$ {totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 text-sm font-medium text-linx-dark-gray captalize">
          {/* guardar as opçõees em um estado em forma de objeto e colocar o codigo de ativacao do sat como required quando selecionado SAT/MFE */}
          <InputRadio
            name="1- A loja utiliza Mobile (POS, celular ou Tablet)?"
            setState={setMobile}
          />
          <InputRadio
            name="2- A loja utiliza Autoatendimento One"
            setState={setAa}
          />
          <InputRadio
            name="3- A loja esstá parada?"
            setState={setClosed}
            alert
          />

          <Input
            title="4- Quantos PDVs a loja possui?"
            type="number"
            placeholder="0"
            value={numberOfPdv}
            onChange={(e) => setNumberOfPdv(e.target.value)}
          />
          <Input
            title="5- Qual o número do PDV que será instalado?"
            type="text"
            placeholder="0"
            value={pdvNumber}
            onChange={(e) => setPdvNumber(e.target.value)}
          />

          <div className="flex flex-col mb-6">
            <p>6- Qual é o emissor fisscal?</p>
            <div className="w-full mt-2 flex gap-24">
              <div className="font-sans">
                <input
                  type="radio"
                  id="nfce"
                  name="fiscalType"
                  value="Sim"
                  onChange={(e) => setFiscalType(e.target.id)}
                  className="text-linx-dark-gray self-start mr-1"
                />
                <label htmlFor="nfce">NFC-e</label>
              </div>

              <div className="font-sans">
                <input
                  type="radio"
                  id="SAT/MFE"
                  name="fiscalType"
                  value="satMfe"
                  onChange={(e) => setFiscalType(e.target.id)}
                  className="text-linx-dark-gray self-start mr-1"
                />
                <label htmlFor="satMfe">SAT/MFE</label>
              </div>

              <div className="font-sans">
                <input
                  type="radio"
                  id="ecf"
                  name="fiscalType"
                  value="ecf"
                  onChange={(e) => setFiscalType(e.target.id)}
                  className="text-linx-dark-gray self-start mr-1"
                />
                <label htmlFor="ecf">ECF</label>
              </div>
            </div>
          </div>
          {fiscalType == "SAT/MFE" && (
            <Input
              title="*Qual o código de ativação do SAT/MFE"
              type="text"
              placeholder="código de 8 números"
              value=""
              onChange={(e) => setSatCode(e.target.value)}
            />
          )}
          {}

          <InputRadio
            name="7- Impressoras remotas?"
            setState={setRemotePrinter}
          />
          <InputRadio
            name="8- Existe mais algum equipamento conectado?"
            setState={setEextraEquipment}
          />

          <Input
            title="Quais equipamentos"
            type="text"
            placeholder="Balança, Pinpad, KDS, etc..."
            value={equipments}
            onChange={(e) => setEquipments(e.target.value)}
          />
        </div>
        <button className="w-full font-dosis font-bold text-linx-white text-xl bg-linx-orange rounded-3xl mt-10 py-3">
          Registrar chamado
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
