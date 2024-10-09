import Image from "next/image";

interface props {
  src: string;
  text: string;
}

const IconTextDescription = ({ src, text }: props) => {
  return (
    <div className="flex gap-4 text-center items-center mb-8">
      <Image src={src} alt="registrar chamado" width={52} height={52} />
      <p className="text-linx-white">{text}</p>
    </div>
  );
};

export default IconTextDescription;
