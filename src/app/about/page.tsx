
import Image from 'next/image';
const About: React.FC = () => {
  return (
    <div>
      <div>
        <div className="bg-orange-500 text-white py-24">
          <div className="container mx-auto flex flex-col lg:flex-row items-center ">
            <div className="text-center lg:text-left lg:pr-8">
              <h1 className="text-5xl font-semibold mb-4">About Us</h1>
              <p className="text-xl text-justify mb-6 leading-loose">
                Revolutionizing Shovel Operations in Mining Imagine a world
                where shovel operators work with unmatched efficiency. A world
                where real-time data empowers them to make informed decisions,
                eliminate delays, and maximize productivity. This world is
                closer than you think, thanks to our innovative system designed
                to transform shovel operations in the mining industry.
              </p>
              <a
                href="/login"
                target="_blank" // Replace with the actual signup page URL
                className="px-6 py-3 bg-black hover:bg-slate-800 text-white rounded-full transition duration-300 ease-in-out inline-block text-lg"
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
        <div className=" text-blue-900 py-12">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className=" text-center lg:text-left lg:pr-8 ">
              <h1 className="text-5xl font-semibold mb-4"> Our Mission</h1>
              <div className="text-xl text-justify leading-10 mb-6 ">
                We are committed to developing cutting-edge solutions that
                address the key challenges faced by shovel operators:
                <ul>
                  <li className="my-8">
                    <span className="text-2xl font-semibold">
                      Lack of real-time visibility:
                    </span>{' '}
                    We bridge the information gap by providing instant and
                    accurate load status of each dumper, eliminating the need
                    for manual communication and visual cues.
                  </li>
                  <li className="my-8">
                    {' '}
                    <span className="font-semibold">
                      Inefficient workflows
                    </span>{' '}
                    : By optimizing the loading process, we minimize delays and
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
                <ul>
                  <li className="my-8">
                    <span className="text-2xl font-semibold">
                      Lack of real-time visibility:
                    </span>{' '}
                    We integrate sensors and IoT devices into dumpers,
                    collecting real-time data on load weight, volume, and
                    location. visual cues.
                  </li>
                  <li className="my-8">
                    {' '}
                    <span className="font-semibold">
                      Inefficient workflows
                    </span>{' '}
                    Our intuitive interface displays the load status of each
                    dumper in real-time, using clear visual indicators and
                    notifications to inform the operator about readiness and
                    completion.
                  </li>
                  <li className="my-8">
                    <span className="font-semibold">
                      Uninformed decision-making:
                    </span>
                    Our system seamlessly integrates with existing
                    infrastructure, ensuring smooth data transmission and
                    compatibility with other mining software and systems.
                  </li>
                  <li className="my-8">
                    <span className="font-semibold">
                      Scalability and robustness:
                    </span>{' '}
                    Our solution is designed to handle a large number of dumpers
                    simultaneously and operate reliably in challenging mining
                    environments.
                  </li>
                  <li className="my-8">
                    <span className="font-semibold">Security and privacy:</span>{' '}
                    We prioritize data security and privacy by implementing
                    robust encryption and authentication measures
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
