export default function Hero() {
  return (
    // <div className="flex-col px-8 md:px-20 py-12">
    //   <div>
    //     <h1 className="text-4xl md:text-6xl mb-32 text-center font-semibold">
    //       Shovel Operator
    //     </h1>
    //   </div>
    //   <div className="flex md:flex-row flex-col justify-between items-start">
    //     <img src="/home.jpg" alt="Home" className="mb-8 md:mb-0 w-full h-full md:w-[45%] md:h-[45%] rounded-lg" />
    //     <div className="text-justify md:w-1/2 md:px-6">
    //       <h2 className='text-3xl mb-8 font-normal'>Lorem ipsum dolor</h2>
    //       <p className='text-justify my-4 leading-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum</p>
    //       <p className='text-justify my-4 leading-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //       minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //       aliquip ex ea commodo consequat. Duis aute irure dolor in
    //       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //       culpa qui officia deserunt mollit anim id est laborum</p>
    //     </div>
    //   </div>
    // </div>

    <div
      className="bg-cover bg-top h-screen"
      style={{
        backgroundImage: 'url("/home.jpg")',
      }}
    >
      <div className="p-8">
        <div className="p-8 backdrop-lg bg-opacity-80 bg-white  w-[45%] rounded-xl">
          <ul>
            <h1 className="text-4xl font-semibold px-4 py-2">What We Do</h1>
            <p className="leading-10 text-justify px-4  py-2 text-xl">
              Specialize in delivering cutting-edge real-time monitoring
              solutions. Focus on dumper load status through intuitive
              visualization and proactive alerts. Provide a seamlessly
              integrated platform for smooth data transmission. Ensure
              compatibility across diverse systems and scalability. Fortify
              solutions with robustness for reliability. Elevate user experience
              through professional and reliable solutions. Prioritize security
              and privacy in all aspects of our services. Offer comprehensive
              monitoring and management of dumper operations.
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
}
