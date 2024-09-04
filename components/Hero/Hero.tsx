import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="w-5/6 sm:w-3/4 text-center h-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-7xl sm:mb-6 mb-5 font-bold">Vinayak Dandin</h1>
        <p className="mb-2">
          <span className="h-2 w-2 mr-1 bg-lime-600 rounded-full border inline-block"></span>
          <span className="text-xs text-gray-400">
            Available to work full time or freelance
          </span>
        </p>
        <div className="flex justify-center">
          <p className="text-gray-600 w-[80%] sm:w-[300px]">
            Hi, I'm a Frontend Developer with 3 years of experience creating
            sleek, responsive websites. I love turning ideas into interactive,
            user-friendly digital experiences using HTML, CSS, JavaScript,
            Reactjs, Typescript and Nextjs.
          </p>
        </div>
        <button className="bg-black text-white p-1 rounded-lg mt-5 w-[260px] sm:w-[300px]">
          <Link href='/contact'>Get in touch</Link>
        </button>
      </div>
    </div>
  );
}
