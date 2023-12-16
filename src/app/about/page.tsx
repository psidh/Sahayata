
import Image from 'next/image';
const About: React.FC = () => {
  return (
    <div>
      <div>
        <div className="bg-orange-500 text-white py-24">
          <div className="container mx-auto flex flex-col lg:flex-row items-center ">
            <div className="text-center lg:text-left lg:pr-8">
              <h1 className="text-5xl font-semibold mb-4">Our Mission</h1>
              <span className="text-2xl font-semibold my-4">
                Revolutionizing Shovel Operations
              </span>
              <ul className="text-xl text-justify my-6 leading-loose list-disc">
                <li>Unmatched efficiency for shovel operators</li>
                <li>
                  Real-time data empowers informed decisions, eliminates delays,
                  and maximizes productivity
                </li>
                <li>
                  Innovative system designed to transform mining operations
                </li>
              </ul>
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
        <div className=" text-blue-900 py-12">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className=" text-center lg:text-left lg:pr-8 ">
              <h1 className="text-5xl font-semibold mb-4"> Our Vision</h1>
              <div className="text-xl text-justify leading-10 mb-6 ">
                We are committed to developing cutting-edge solutions that
                address the key challenges faced by shovel operators:
                <ul className="list-disc">
                  <li className="my-8">
                    <span className="text-2xl font-semibold">
                      Real-time Visibility
                    </span>{' '}
                    We bridge the information gap by providing instant and
                    accurate load status of each dumper, eliminating the need
                    for manual communication and visual cues.
                  </li>
                  <li className="my-8">
                    {' '}
                    <span className="font-semibold">Efficient Workflows</span> :
                    By optimizing the loading process, we minimize delays and
                    maximize the number of loads per hour, leading to
                    significant productivity gains.{' '}
                  </li>
                  <li className="my-8">
                    <span className="font-semibold">
                      Uninformed decision-making:
                    </span>{' '}
                    Our intuitive interface empowers shovel operators with
                    actionable insights,allowing them to make informed decisions
                    and optimize their loading strategies.
                  </li>
                </ul>
              </div>
            </div>

            <div className=" mt-6 lg:mt-0">
              {/* Next.js Image Component */}
              <div className="relative h-64 w-64 mx-auto lg:mx-0">
                <Image
                  // Replace with your image path
                  src="/mission.svg"
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

        <div className="bg-green-500 text-white py-12">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className=" text-center lg:text-left lg:pr-8 ">
              <h1 className="text-5xl font-semibold mb-4">Our Approach</h1>
              <div className="text-xl text-justify leading-10 mb-6 ">
                We are committed to developing cutting-edge solutions that
                address the key challenges faced by shovel operators:
                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    Real-time Visibility: Sensors and IoT devices provide live
                    data on load metrics.
                  </li>
                  <li className="mb-4">
                    Efficient Workflows: Intuitive interface shows real-time
                    load status with visual indicators.
                  </li>
                  <li>
                    Informed Decision-Making: Seamless integration with existing
                    infrastructure for smooth data transmission and
                    compatibility, prioritizing security.
                  </li>
                </ul>
              </div>
            </div>

            <div className=" mt-6 lg:mt-0">
              {/* Next.js Image Component */}
              <div className="relative h-64 w-64 mx-auto lg:mx-0">
                <Image
                  // Replace with your image path
                  src="/approach.svg"
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
    </div>
  );
};

export default About;
