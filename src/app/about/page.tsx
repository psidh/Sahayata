import ProblemSolutionTable from '@/components/PS';
import DemurrageCalculator from '@/components/Work';
import Image from 'next/image';
const About: React.FC = () => {
  return (
    <div>
      <div>
        <div className="bg-yellow-500 text-white py-12">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className=" text-center lg:text-left lg:pr-8">
              <h1 className="text-4xl font-semibold mb-4">Who are WE ?</h1>
              <p className="text-xl text-justify leading-10 mb-6">
                This website provides the Admin controller with the Information
                of the dumper trucks and the coal stock. The Admin can also
                assign the shovel operators with the dumper trucks. The shovel
                operators can login and view their assigned dumper trucks. The
                Admin can also view the status of the dumper trucks and the coal
                stock.
              </p>
              <a
                href="/login"
                target="_blank" // Replace with the actual signup page URL
                className="px-6 py-3 bg-yellow-700 hover:bg-yellow-800 text-white rounded-full transition duration-300 ease-in-out inline-block text-lg"
              >
                Get Started
              </a>
            </div>
            <div className=" mt-6 lg:mt-0">
              {/* Next.js Image Component */}
              <div className="relative h-64 w-64 mx-auto lg:mx-0">
                <Image
                  // Replace with your image path
                  src="/info.svg"
                  alt="Coal Operator Image"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 container mx-auto font-semibold my-4 px-6 md:px-16  text-justify">
        <ProblemSolutionTable />
        <DemurrageCalculator />
        <section className="my-4">
          <h2 className="text-2xl md:text-4xl text-gray-700  font-semibold mt-8 mb-4">
            How We Solve the Problem
          </h2>
          <p className="text-lg md:text-xl text-gray-600 my-2">
            Our digital platform provides real-time updates on coal availability
            at railway sidings, ensuring efficient dispatch of trains to
            locations with sufficient coal. By optimizing transportation routes
            and reducing waiting times, we help companies save on demurrage
            charges and streamline operations.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
