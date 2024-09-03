export default function Hero() {
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="w-5/6 sm:w-1/2 text-center h-1/2">
        <h1 className="text-4xl sm:text-5xl sm:mb-4 mb-3 font-bold">Vinayak Dandin</h1>
        <p className="mb-3 sm:mb-4">
          <span className="h-2 w-2 mr-1 bg-lime-600 rounded-full border inline-block"></span>
          <span className="text-xs text-gray-400">
            Available to work full time or freelance
          </span>
        </p>
        <div className="flex justify-center">
          <p className="text-gray-600 w-[80%] sm:w-[65%] max-w-[1400px]">
            Hi, I'm a Frontend Developer with 3 years of experience creating
            sleek, responsive websites. I love turning ideas into interactive,
            user-friendly digital experiences using HTML, CSS, JavaScript,
            Reactjs, Typescript and Nextjs.
          </p>
        </div>
      </div>
    </div>
  );
}
