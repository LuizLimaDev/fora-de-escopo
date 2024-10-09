import IconTextDescription from "@/components/IconTextDescription/IconTextDescription";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-screnn h-screen p-10 flex items-center justify-center">
      <div className="flex items-center gap-14">
        <div className="w-[662px]">
          <div className="mb-10">
            <h1 className="linx-title">Linx Degust</h1>
            <h1 className="linx-title">Serviço fora de escopo</h1>
          </div>

          <p className="mb-10 text-2xl">
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

        <div className="flex-col-center">
          <Image
            src="/linx-logo.svg"
            alt="logo linx"
            width={185}
            height={108}
            className="mb-10"
          />
          <div className="w-[631px] h-[728px] bg-linx-white rounded-3xl flex-col-center px-9">
            <h3 className="text-linx-orange font-dosis self-start font-semibold text-[20px]">
              Registre o seu chamado:
            </h3>

            <div></div>

            <button className="w-[561px] h-14 bg-linx-orange rounded-[50px] font-dosis font-bold text-lg">
              Registrar chamado
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
