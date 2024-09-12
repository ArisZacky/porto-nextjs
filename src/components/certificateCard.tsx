import certificate1 from "../../public/certifications/Certificate1.png";
import certificate2 from "../../public/certifications/Certificate2.png";
import CertificateCardContent from "./certificateCardContent";
import Image, { StaticImageData } from "next/image";
interface Certificate {
  src: StaticImageData;
  alt: string;
  title: string;
}

const certificates: Certificate[] = [
  {
    src: certificate1,
    alt: "Sertifikat MSIB",
    title: "MSIB 6",
  },
  {
    src: certificate2,
    alt: "Sertifikat Stechoq",
    title: "Stechoq",
  },
  {
    src: certificate2,
    alt: "Sertifikat Stechoq",
    title: "Stechoq",
  },
  {
    src: certificate2,
    alt: "Sertifikat Stechoq",
    title: "Stechoq",
  },
  {
    src: certificate2,
    alt: "Sertifikat Stechoq",
    title: "Stechoq",
  },
  {
    src: certificate2,
    alt: "Sertifikat Stechoq",
    title: "Stechoq",
  },
  {
    src: certificate2,
    alt: "Sertifikat Stechoq",
    title: "Stechoq",
  },
];
const CertificateCard = () => {
  return (
    <>
      {certificates.map((certificate, index) => (
        <CertificateCardContent
          key={index}
          src={certificate.src}
          alt={certificate.alt}
          title={certificate.title}
        />
      ))}
    </>
  );
};

export default CertificateCard;
