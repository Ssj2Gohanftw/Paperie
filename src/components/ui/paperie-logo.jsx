import Image from "next/image";

const PaperieLogo = ({ width, height, className }) => {
  return (
    <Image
      src="/images/logo/paperie-logo.png"
      alt="Paperie Logo"
      height={height}
      width={width}
      className={className}
      priority
      //   className="object-contain pt-15 mt-2 py-2"
    />
  );
};
export default PaperieLogo;
