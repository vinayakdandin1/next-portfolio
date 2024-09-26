import profilePhoto from "@/public/images/hacker.png";
import Sunburst from "@/components/Sunburst/Sunburst";
import skillsData from "@/data/data";
import Image from "next/image";

export default function About() {

  return (
    <div className="min-h-screen">
      <div className="border-b-2 w-screen">
        <div className="sm:flex sm:justify-between sm:items-center sm:w-[200px] md:w-[800px] lg:w-[1000px]  mx-auto mt-20 sm:mt-[200px]">
          <div className="mx-10 sm:mx-4 content-center text-center ">
            <h2 className="text-4xl md:text-5xl  font-bold mb-4">
              A little bit about me
            </h2>
            <div className="text-gray-600 md:mr-10 lg:mr-32">
              <p className="mb-4 text-base sm:text-lg">
                I am a Full stack web developer based in Berlin, Germany.
              </p>
              <p className="text-sm">
                I've been passionate about transforming complex challenges into
                seamless, efficient, and user-friendly web applications. When
                I'm not coding, you can find me experimenting with raspberry pi,
                playing with my kids or hiking in some beautiful place.
              </p>
            </div>
          </div>
          <div className="sm:items-center mt-6 mb-4 w-[200px] sm:w-[600px] mx-auto">
            <Image
              className="rounded-full"
              width={800}
              height={800}
              src={profilePhoto}
              alt="Vinayak Photo"
            />
          </div>
        </div>
      </div>
      <div className="w-screen mt-10 mb-20 sm:w-[600px] mx-auto">
        <div className="mx-4 sm:mx-auto">
          <Sunburst data={skillsData} keyId="Sunburst" width={600} />
        </div>
      </div>
    </div>
  );
}
