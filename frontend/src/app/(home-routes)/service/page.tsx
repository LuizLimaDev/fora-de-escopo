import ServiceForm from "@/components/ServiceForm/ServiceForm";
import Image from "next/image";

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

      <div>
        <h2>PRÉ-REQUISITOS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          molestias in iure perspiciatis dolores. Reiciendis dolores voluptates
          harum quod unde consequuntur. Temporibus ut aliquam consequuntur,
          fugit excepturi reprehenderit cum eaque.
        </p>
      </div>
    </main>
  );
};

export default Service;
