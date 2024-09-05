"use client";
import TypeIt from "typeit-react";
import Image from "next/image";
import MyPhotos from "../../public/Images/MyPhotos.jpg";

export default function Home() {
  return (
    <>
      <div className="p-4 sm:ml-64 h-screen">
        <div className="flex flex-col gap-4 sm:flex-row items-center h-full">
          <Image
            src={MyPhotos}
            alt="My Photos"
            width={250}
            height={350}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-start gap-2.5">
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-transparent border-solid border-2 border-gray-400 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    Zacky
                  </span>
                </div>
                <TypeIt
                  className="ms-3"
                  options={{ speed: 50, loop: false }}
                  getBeforeInit={(instance) => {
                    instance.type(
                      "Hi! My name is Zacky, I'm a Software Engineer"
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
