import Image from 'next/image';
const About: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
      <div className="bg-blue-100 text-blue-900">
          <div className="flex flex-col items-center p-8">
            <div>
              <div className="relative h-64 w-64">
                <Image
                  // Replace with your image path
                  src="/icons/mission.png"
                  alt="Coal Operator Image"
                  width={500}
                  height={500}  
                />
              </div>
            </div>
            <div className="text-center ">
              <h1 className="text-4xl font-semibold my-4">Objectives</h1>
              <div className="text-lg text-justify leading-10">
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
          </div>
        </div>

        <div className="bg-blue-200 text-blue-900">
          <div className="flex flex-col items-center p-8">
            <div>
              <div className="relative h-64 w-64">
                <Image
                  // Replace with your image path
                  src="/icons/vision.png"
                  alt="Coal Operator Image"
                  width={500}
                  height={500}              
                />
              </div>
            </div>
            <div className="text-center ">
            <h1 className="text-4xl font-semibold my-4">Approach</h1>
              <div className="text-lg text-justify leading-10">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
