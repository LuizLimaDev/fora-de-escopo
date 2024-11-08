import ClientForm from "@/components/ClientForm/ClientForm";
import IconTextDescription from "@/components/IconTextDescription/IconTextDescription";
import Image from "next/image";

export default async function HomePage() {

//api awake
const res = await fetch("https://fora-de-escopo-api.onrender.com/tp")
if (!res.ok) return console.log(res)
console.log('API awaked!')

  return (
    <main>
      <div className="w-screen h-screen xl:flex xxl:justify-center xxl:items-center xl:gap-[4.1875rem] xl:p-10 p-3">
        <div className="w-full xl:w-[41.375rem] xl:self-center ">
          <div className="linx-title text-center xl:text-left mb-12">
            <h1>Linx Degust</h1>
            <h1>Serviço fora de escopo</h1>
          </div>

          <p className="mb-12 text-center xl:text-left">
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

        <div className="w-full xl:max-h-[45.5rem] xl:max-w-[39.4375rem] flex flex-col items-center">
          <Image
            src="/linx-logo.svg"
            alt="logo linx"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[11.5625rem] h-[6.75rem] xl:w-[25%] mb-12"
          />
          <div className="w-full xl:h-full flex flex-col bg-linx-white rounded-3xl p-4">
            <h3 className="text-linx-orange text-center font-dosis text-xl font-bold mt-4">
              Registre o seu chamado:
            </h3>

            <div className="flex flex-col font-bold">
              <ClientForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
