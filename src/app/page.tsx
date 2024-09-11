"use client";
import TypeIt from "typeit-react";
import Image from "next/image";
import MyPhotos from "../../public/Images/MyPhotos.png";

export default function Home() {
  return (
    <>
      <div className="p-4 sm:ml-64 sm:h-screen">
        <div className="flex flex-col items-center sm:items-start sm:justify-center h-full">
          <Image
            src={MyPhotos}
            alt="My Photos"
            width={150}
            height={150}
            className="items-start"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2.5">
              <div className="flex flex-col w-full max-w-[600px] leading-1.5 p-4 border-gray-800 bg-transparent border-double border-4 rounded-e-xl rounded-es-xl">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Zacky
                  </span>
                </div>
                <TypeIt
                  className="ms-3"
                  options={{
                    speed: 50,
                    loop: false,
                  }}
                  getBeforeInit={(instance) => {
                    instance.type(
                      "Hi! My name is Zacky, I'm a Software Engineer student. It's great to meet you!"
                    );
                    return instance;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
