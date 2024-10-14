import ServiceForm from "@/components/ServiceForm/ServiceForm";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <main className="w-screen h-screen p-4">
      <div className="flex mb-10 gap-12">
        <div>
          <h1 className="linx-title text-3xl">Linx Degust</h1>
          <h1 className="linx-title text-3xl">Serviço fora de escopo</h1>
        </div>

        <Image
          src="/linx-logo.svg"
          alt="logo linx"
          width={60}
          height={35}
          className="mb-12"
        />
      </div>

      <div className="w-full flex-col-center">
        <ServiceForm />
      </div>

      <div className="mt-10 pb-10 text-justify">
        <h2 className="text-linx-orange mb-2">PRÉ-REQUISITOS</h2>
        <p className="mb-4">
          • Consulte os requisitos mínimos de equipamentos em: 
          <Link
            href="https://share.linx.com.br/pages/viewpage.action?pageId=334144784"
            className="text-linx-orange"
          >
            Linx Share Requisitos mínimos.
          </Link>
        </p>
        <p className="mb-4">
          • Segue o Linx Share dos serviços do nosso Suporte: 
          <Link
            href="https://share.linx.com.br/pages/viewpage.action?pageId=65923790"
            className="text-linx-orange"
          >
            Linx Share Boas práticas suporte Food Service.
          </Link>
        </p>
        <p className="mb-4">
          • O serviço será feito por conexão através do Software de Acesso
          Remoto.“A Linx reserva-se no direito de preservar o bom funcionamento
          do sistema, que envolve atender aos requisitos mínimos de equipamento
          e integração com periféricos, desde que estes estejam em perfeito
          estado de funcionamento e sob a adequada configuração fornecida pelo
          fabricante e pela Equipe Linx Degust”.
        </p>
        <p className="mb-4">
          • É obrigatório o preenchimento de todos os dados para autorizar o
          serviço. Caso o email não seja respondido com todos os dados do
          responsável dentro do prazo determinado, o chamado será cancelado
          automaticamente.
        </p>
        <p className="mb-4">
          • Este termo de aceite é valido por 72 horas, caso não seja respondido
          dentro do prazo o chamado será cancelado automaticamente.
        </p>
        <p className="mb-4">• Ficamos no aguardo para darmos continuidade.</p>
      </div>
    </main>
  );
};

export default Service;
