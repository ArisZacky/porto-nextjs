import Image from "next/image";

interface SkillsImageProps {
  image: any;
  altText: string;
}

const SkillsImage: React.FC<SkillsImageProps> = ({ image, altText }) => {
  return (
    <>
      <Image
        src={image}
        alt={altText}
        width={64}
        height={64}
        style={{ objectFit: "cover" }}
      />
    </>
  );
};

export default SkillsImage;
