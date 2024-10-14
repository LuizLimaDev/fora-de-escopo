import ClientForm from "@/components/ClientForm/ClientForm";
import IconTextDescription from "@/components/IconTextDescription/IconTextDescription";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div className="p-3">
        <div className="w-full">
          <div className="linx-title text-center mb-12">
            <h1>Linx Degust</h1>
            <h1>Serviço fora de escopo</h1>
          </div>

          <p className="mb-12 text-center">
            Toda e qualquer reinstalação de produtos Linx é considerado um
            “Serviço fora de escopo.
          </p>

          <div>
            <IconTextDescription
              src="/icons/register.svg"
              text="Registro do chamado"
            />
            <IconTextDescription
              src="/icons/question.svg"
              text="Questionário de configurações do PDV"
            />
            <IconTextDescription
              src="/icons/sign.svg"
              text="Autorização do serviço"
            />
            <IconTextDescription
              src="/icons/chat.svg"
              text="Contato com o Suporte para instalação"
            />
          </div>
        </div>

        <div className="w-full flex-col-center">
          <Image
            src="/linx-logo.svg"
            alt="logo linx"
            width={185}
            height={108}
            className="mb-12"
          />
          <div className="w-full flex flex-col bg-linx-white rounded-3xl p-4">
            <h3 className="text-linx-orange text-center font-dosis text-xl font-bold mt-4 mb-12">
              Registre o seu chamado:
            </h3>

            <div className="flex flex-col font-bold">
              <ClientForm />
            </div>

            <button className="cursor-pointer">Registrar chamado</button>
          </div>
        </div>
      </div>
    </main>
  );
}
