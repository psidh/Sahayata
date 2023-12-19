import Image from 'next/image';
const About: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-blue-100 text-blue-900">
          <div className="flex flex-col items-center justify-center p-4">
            <div>
              <div className="relative h-64 w-64">
                <Image
                  // Replace with your image path
                  src="/icons/mission.png"
                  alt="Coal Operator Image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="text-center p-8">
              <h1 className="text-3xl font-semibold my-4">Objectives</h1>
              <div className="text-lg text-justify">
                We are committed to developing cutting-edge solutions that
                address the key challenges faced by shovel operators:
                <ul className="list-disc">
                  <li className="my-4">
                    <span className="font-semibold">Enhance Efficiency:</span>{' '}
                    Instant visibility, eliminate delays.
                  </li>
                  <li className="my-4">
                    {' '}
                    <span className="font-semibold">Optimize Workflows:</span>
                    Informative decisions, minimize downtime.
                  </li>
                  <li className="my-4">
                    <span className="font-semibold">
                      Strengthen Operations:
                    </span>{' '}
                    Improve efficiency, reduce costs, enhance safety.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-200 text-blue-900 p-8">
          <div className="flex flex-col items-center justify-center p-4">
            <div>
              <div className="relative h-64 w-64">
                <Image
                  // Replace with your image path
                  src="/icons/vision.png"
                  alt="Coal Operator Image"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-semibold my-4">Approach</h1>
              <div className="text-lg text-justify">
                Committed to innovative solutions for shovel operators:
                <ul className="list-disc">
                  <li className="my-4">
                    <span className="font-semibold">Real-time Visibility:</span>{' '}
                    Instant, accurate dumper status without manual cues.
                  </li>
                  <li className="my-2">
                    <span className="font-semibold">Efficient Workflows:</span>{' '}
                    Optimize loading, minimize delays, and boost productivity.
                  </li>
                  <li className="my-4">
                    <span className="font-semibold">
                      Informed Decision-Making:
                    </span>{' '}
                    Empower operators with actionable insights for optimized
                    strategies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
