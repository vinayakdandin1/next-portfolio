import profilePhoto from "@/public/images/hacker.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex h-screen justify-center mx-8 sm:m-10">
      <div className="flex justify-between items-center sm:w-[200px] md:w-[800px] lg:w-[1000px]">
        <div>
          <h2 className="text-4xl md:text-5xl  font-bold mb-4">
            A little bit about me
          </h2>
          <div className="text-gray-600 md:mr-10 lg:mr-32">
            <p className="mb-4 text-sm sm:text-base">
              I am a Full stack web developer based in Berlin, Germany.
            </p>
            <p className="text-sm">
              Since 2021, I've been passionate about transforming complex
              challenges into seamless, efficient, and user-friendly web
              applications. When I'm not coding, you can find me experimenting
              with raspberry pi, playing with my kids or hiking some where in a
              beautiful place.
            </p>
          </div>
        </div>
        <div className="hidden sm:block ml-10 items-center">
          <Image
            className="rounded-full"
            width={1000}
            height={1000}
            src={profilePhoto}
            alt="Vinayak Photo"
          />
        </div>
      </div>
    </div>
  );
}
