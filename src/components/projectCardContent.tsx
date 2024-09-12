import Image, { StaticImageData } from "next/image";

interface CertificateCardContentProps {
  src: StaticImageData;
  alt: string;
  title: string;
  github: string | null; //Could be string or null
  link: string | null; //Could be string or null
}

const CertificateCardContent: React.FC<CertificateCardContentProps> = ({
  src,
  alt,
  title,
  github,
  link,
}) => {
  return (
    <>
      <div className="flex flex-col items-center w-fit bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative overflow-hidden group">
          <Image
            className="rounded-xl p-2"
            src={src}
            alt={alt}
            width={225}
            height={150}
          />
          <div className="absolute rounded-lg bg-black/20 h-full w-full flex items-center justify-center -top-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 gap-3">
            {github && (
              <div>
                <a href={github} className="">
                  <i className="nes-icon github"></i>
                </a>
              </div>
            )}
            {link && (
              <div>
                <a href={link} className="">
                  <Image
                    src="/eye.svg"
                    alt="Start Button"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2 mb-2">
          <h5 className="mb-2 text-sm text-center tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
      </div>
    </>
  );
};

export default CertificateCardContent;
