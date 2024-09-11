import emyu from "../../public/Interest/Manchester-United.png";
import cat from "../../public/Interest/cat.png";
import game from "../../public/Interest/game-controller.png";
import Image from "next/image";
const InterestPanel = () => {
  return (
    <>
      <div className="space-y-4">
        {/* Item 1 */}
        <div className="flex items-center gap-4">
          <Image src={cat} alt="Cat Icon" width={50} height={50} />
          <span className="text-xs md:text-base">
            Zacky is a Cat Person rather than a Dog Person
          </span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4">
          <Image src={game} alt="Manchester United" width={50} height={50} />{" "}
          <span className="text-xs md:text-base">
            Zacky enjoys playing game and is currently active in playing Tekken
            8
          </span>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4">
          <Image src={emyu} alt="Manchester United" width={50} height={50} />{" "}
          <span className="text-xs md:text-base">
            Yes.. Zacky is a Manchester United Fan :&apos;) Glory Glory Man
            United!
          </span>
        </div>
      </div>
    </>
  );
};

export default InterestPanel;
