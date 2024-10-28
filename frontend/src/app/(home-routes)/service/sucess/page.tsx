import Image from "next/image";
import Link from "next/link";

const ModalSucess = () => {
  return (
    <main className="w-screen h-screen flex-col-center">
      <div className="w-[90%] xl:w-[58%] xl:h-[80%] rounded-3xl px-6 py-20 flex-col-center gap-20 bg-linx-white">
        <h1 className="font-dosis font-bold text-linx-purple text-5xl text-center">
          Chamado registrado
        </h1>
        <p className="w-[50%] font-bold text-linx-dark-gray text-2xl text-center">
          Entre em contato com o Suporte Degust e
          <span className="text-linx-orange"> informe o CNPJ </span>
          para realização do Serviço Fora de Escopo.
        </p>

        <Link href="https://wa.me/1121034321">
          <Image
            src="/icons/whats.svg"
            alt="contato do suport por whatsapp"
            width={107}
            height={100}
          />
        </Link>
      </div>
    </main>
  );
};

export default ModalSucess;
