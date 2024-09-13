import msib6 from "../../public/certifications/MSIB-6.png";
import python from "../../public/certifications/python.png";
import intechfestDev from "../../public/certifications/intechfest-dev.png";
import gamedev from "../../public/certifications/1st-place-game-dev.png";
import bnsp from "../../public/certifications/junior-web-dev.png";

import CertificateCardContent from "./certificateCardContent";
import Image, { StaticImageData } from "next/image";
interface Certificate {
  src: StaticImageData;
  alt: string;
  title: string;
}

const certificates: Certificate[] = [
  {
    src: msib6,
    alt: "Sertifikat MSIB",
    title: "MSIB 6",
  },
  {
    src: python,
    alt: "Python",
    title: "Python",
  },
  {
    src: intechfestDev,
    alt: "Intechfest Developers",
    title: "Intechfest Dev",
  },
  {
    src: gamedev,
    alt: "Game Dev",
    title: "Game Dev",
  },
  {
    src: bnsp,
    alt: "BNSP Web Dev",
    title: "BNSP Web Dev",
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
