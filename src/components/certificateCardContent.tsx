import Image, { StaticImageData } from "next/image";

interface CertificateCardContentProps {
  src: StaticImageData; // Ini tipe data untuk gambar yang diimpor
  alt: string;
  title: string;
}

const CertificateCardContent: React.FC<CertificateCardContentProps> = ({
  src,
  alt,
  title,
}) => {
  return (
    <>
      <div className="flex flex-col items-center w-fit bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-xl p-2 mx-auto"
          src={src}
          alt={alt}
          width={225}
          height={150}
        />
        <div className="mb-4">
          <h5 className="mb-2 text-sm text-center tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
      </div>
    </>
  );
};

export default CertificateCardContent;
